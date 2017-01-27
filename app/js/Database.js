import * as RxDB from 'rxdb';
RxDB.plugin(require('pouchdb-adapter-idb'));

const DBName = 'niraniaDB';
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

export let Database = {
    create: async function() {
        if (!DB) {
            DB = await RxDB.create(DBName, 'idb');
            levelCollection = await DB.collection('level', levelSchema);
            soundCollection = await DB.collection('sound', soundSchema);
        }
    },
    updateLevel: async function(level, success, diamonds) {
        let doc = await levelCollection.findOne(level).exec();
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
                diamonds: diamonds,
                success: success
            });
        }
    },
    updateSound: function(sound) {
        soundCollection.insert({
            sound: sound
        });
    },
    getSound: function() {
        return soundCollection.findOne();
    },
    getLevel: async function(level) {
        let doc = await levelCollection.findOne(level).exec();
        let ret = {
            success: false,
            diamonds: 0
        };
        if (doc) {
            ret.success = doc.get('success');
            ret.diamonds = doc.get('diamonds');
        }
        return ret;
    }
};
