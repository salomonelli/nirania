import {
    get as DatabaseServiceGet
} from '../services/database.service';

import {
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema,
    RxJsonSchema,
    RxCollection,
    RxDocument,
    ensureNotFalsy
} from 'rxdb';

const schemaLiteral = {
    title: 'level schema',
    description: 'describes a level',
    version: 0,
    type: 'object',
    primaryKey: 'level',
    properties: {
        level: {
            type: 'string',
            maxLength: 8
        },
        success: {
            type: 'boolean'
        },
        survived: {
            type: 'boolean'
        },
        diamonds: {
            type: 'number'
        }
    }
} as const;
const schemaTyped = toTypedRxJsonSchema(schemaLiteral);
type LevelDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
const schema: RxJsonSchema<LevelDocType> = schemaLiteral;
export type RxLevelDocument = RxDocument<LevelDocType, typeof methods>;
export type LevelCollection = RxCollection<LevelDocType, typeof methods, typeof statics>;

async function getByNr(this: LevelCollection, level: number): Promise<RxLevelDocument> {
    let doc = await this.findOne(level + '').exec();
    if (!doc) {
        const docData = {
            level: level + '',
            success: false,
            survived: false,
            diamonds: 0
        };
        doc = await this.insert(docData);
    }
    return doc;
}

async function getSuccessful(this: LevelCollection) {
    const docs = await this.find()
        .where('success').eq(true)
        .exec();
    return docs;
};

async function previousLevel(this: RxLevelDocument) {
    const collection: LevelCollection = this.collection as any;
    const prevId = this.levelId() - 1;
    if (prevId < 1) return null;
    else return collection.getByNr(prevId);
};

async function canBePlayed(this: RxLevelDocument) {
    if (this.levelId() === 1) return true;
    const previousLevelDoc = await this.previousLevel();
    if (ensureNotFalsy(previousLevelDoc).success) return true;
    else return false;
};

async function upsertLevel(this: LevelCollection, levelId: number, success: any, survived: any, diamonds: any) {
    const levelDoc = await this.getByNr(levelId);
    if (levelDoc) {
        const patch: any = {};
        if (!levelDoc.get('survived')) {
            patch.survived = survived;
        }
        if (!levelDoc.get('success')) {
            patch.success = success;
        }
        if (levelDoc.get('diamonds') < diamonds && !!success) {
            patch.diamonds = diamonds;
        }
        await levelDoc.atomicPatch(patch);
    } else {
        this.insert({
            level: levelId + '',
            success: success,
            survived: survived,
            diamonds: diamonds
        });
    }
}


const statics = {
    getByNr,
    getSuccessful,
    upsertLevel
};
const methods = {
    previousLevel,
    canBePlayed,
    levelId
};



function levelId(this: any) {
    return parseInt(this.level, 10);
}

async function create(): Promise<LevelCollection> {
    console.log('level model create');
    const db = await DatabaseServiceGet();
    console.log('level model create GOT DB');
    await db.addCollections({
        level: {
            schema,
            statics,
            methods
        }
    });
    console.log('level model create DONE');
    const docs = await db.level.find().exec();
    console.dir(docs.map((d: any) => d.toJSON()));
    return db.level;
}

let createPromise: Promise<any> | null = null;

export function get(): Promise<LevelCollection> {
    if (!createPromise) createPromise = create();
    return createPromise;
}
