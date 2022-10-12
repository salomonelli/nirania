import DatabaseService from '../services/database.service';


import {
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema,
    RxJsonSchema,
    RxCollection
} from 'rxdb';

const schemaLiteral = {
    title: 'settings schema',
    type: 'object',
    version: 0,
    primaryKey: 'key',
    properties: {
        key: {
            type: 'string',
            maxLength: 20
        },
        value: {
            type: 'object'
        }
    },
    required: [
        'value'
    ]
} as const;

const schemaTyped = toTypedRxJsonSchema(schemaLiteral);
type SettingsDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
const schema: RxJsonSchema<SettingsDocType> = schemaLiteral;


const defaults = {
    sound: true
};

async function getValueByKey(this: any, key: string) {
    const doc = await this.findOne(key).exec();
    if (!doc) return (defaults as any)[key];
    return doc.value;
};

async function setValueByKey(this: any, key: string, value: any) {
    await this.upsert({
        key,
        value
    });
};

const statics = {
    getValueByKey,
    setValueByKey
};
const methods = {};

export type SettingsCollection = RxCollection<SettingsDocType, typeof methods, typeof statics>;


async function create(): Promise<SettingsCollection> {
    const db = await DatabaseService.get();
    await db.addCollections({
        settings: {
            schema,
            statics,
            methods
        }
    });
    return db.settings;
};

let createPromise: Promise<any> | null = null;

export function get(): Promise<SettingsCollection> {
    if (!createPromise) createPromise = create();
    return createPromise;
};
