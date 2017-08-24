import {
    get as DatabaseServiceGet
} from '../services/database.service';

const schema = {
    title: 'level schema',
    description: 'describes a level',
    version: 0,
    type: 'object',
    properties: {
        level: {
            type: 'string',
            primary: true
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
};

async function getByNr(level) {
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

async function getSuccessful() {
    const docs = await this.find()
        .where('success').eq(true)
        .exec();
    return docs;
};

async function previousLevel() {
    const prevId = this.levelId() - 1;
    if (prevId < 1) return null;
    else return this.collection.getByNr(prevId);
};

async function canBePlayed() {
    if (this.levelId() === 1) return true;
    const previousLevelDoc = await this.previousLevel();
    if (previousLevelDoc.success) return true;
    else return false;
};

async function upsertLevel(levelId, success, survived, diamonds) {
    const levelDoc = await this.getByNr(levelId);
    if (levelDoc) {
        if(!levelDoc.get('survived')) levelDoc.set('survived', survived);
        if(!levelDoc.get('success')) levelDoc.set('success', success);
        if(levelDoc.get('diamonds') < diamonds && !!success) levelDoc.set('diamonds', diamonds);
        await levelDoc.save();
    } else{
        this.insert({
            level: levelId + '',
            success: success,
            survived: survived,
            diamonds: diamonds
        });
    }
}


async function updateData(success, diamonds) {

    // TODO do we need this function?

    /*
        if (doc) {
            if (success) doc.set('success', success);
            if (!doc.get('diamonds') ||
                diamonds > doc.get('diamonds')
            )
                doc.set('diamonds', diamonds);
            await doc.save();
        } else {
            await levelCollection.insert({
                level: level + '',
                levelID: level,
                diamonds: diamonds,
                success: success
            });
        }*/
};


function levelId() {
    return parseInt(this.level, 10);
}

async function create() {
    const db = await DatabaseServiceGet();
    const collection = await db.collection({
        name: 'level',
        schema,
        statics: {
            getByNr,
            getSuccessful,
            upsertLevel
        },
        methods: {
            updateData,
            previousLevel,
            canBePlayed,
            levelId
        }
    });
    return collection;
}

let createPromise = null;

export function get() {
    if (!createPromise) createPromise = create();
    return createPromise;
}
