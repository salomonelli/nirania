import DatabaseService from '../services/Database';

const schema = {
    title: 'settings schema',
    type: 'object',
    version: 0,
    properties: {
        key: {
            type: 'string',
            primary: true
        },
        value: {
            type: 'object',
            required: true
        }
    }
};


const defaults = {
    sound: true
};

async function getValueByKey(key) {
    const doc = await this.findOne(key).exec();
    if (!doc) return defaults[key];
    return doc.value;
};

async function setValueByKey(key, value) {
    await this.upsert({
        key,
        value
    });
};

async function create() {
    const db = await DatabaseService.get();
    const collection = await db.collection({
        name: 'settings',
        schema,
        statics: {
            getValueByKey,
            setValueByKey
        },
        methods: {}
    });
    return collection;
};

let createPromise = null;

export function get() {
    if (!createPromise) createPromise = create();
    return createPromise;
};
