import * as RxDB from 'rxdb';
RxDB.plugin(require('pouchdb-adapter-idb'));

const DBName = 'niraniaDB2';
let DB, levelCollection, soundCollection;

const levelSchema = {
    title: 'level schema',
    description: 'describes a level',
    type: 'object',
    properties: {
        level: {
            type: 'string',
            primary: true
        },
        levelID: {
            type: 'number'
        },
        success: {
            type: 'boolean'
        },
        diamonds: {
            type: 'number'
        }
    }
};

const soundSchema = {
    title: 'settings schema',
    description: 'describes user settings',
    type: 'object',
    properties: {
        sound: {
            type: 'boolean'
        }
    }
};


export async function create() {
    if (!DB) {
        DB = await RxDB.create(DBName, 'idb');
        levelCollection = await DB.collection('level', levelSchema);
        soundCollection = await DB.collection('sound', soundSchema);
    }
}

export async function updateLevel(level, success, diamonds) {
    let doc = await levelCollection.findOne(level + '').exec();
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
    }
};

export async function updateSound(sound) {
    soundCollection.insert({
        sound: sound
    });
};

export async function getSound() {
    return soundCollection.findOne();
};

export async function getLevel(level) {
    let doc = await levelCollection.findOne(level + '').exec();
    let ret = {
        success: false,
        diamonds: 0
    };
    if (doc) return doc;
    return ret;
};

export async function getSuccessfulLevels() {
    const docs = await levelCollection.find()
        .where('success').eq(true)
        .exec();
    return docs;
};
