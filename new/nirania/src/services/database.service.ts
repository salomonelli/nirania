import {
    createRxDatabase,
    RxDatabase
} from 'rxdb';
import { LevelCollection } from '../models/level.model';
import { SettingsCollection } from '../models/settings.model';

import { getRxStorageDexie } from 'rxdb/plugins/dexie';

const syncURL = 'http://' + window.location.hostname + ':10102/';
console.log('host: ' + syncURL);
// const syncURL = host;

let dbPromise: Promise<any> | null = null;


export type NiraniaDatabaseCollections = {
    settings: SettingsCollection;
    level: LevelCollection;
};
export type NiraniaDatabase = RxDatabase<NiraniaDatabaseCollections>;

const _create = async function (): Promise<NiraniaDatabase> {
    console.log('DatabaseService: creating database..');
    const db = await createRxDatabase<NiraniaDatabaseCollections>({
        name: 'niraniadb',
        storage: getRxStorageDexie(),
        password: 'myLongAndStupidPassword'
    });
    console.log('DatabaseService: created database');
    (window as any)['db'] = db; // write to window for debugging

    // show leadership in title
    /*
    db.waitForLeadership().then(() => {
        console.log('isLeader now');
        document.title = '♛ ' + document.title;
    });
     */
    // sync
    // console.log('DatabaseService: sync');
    // if (db.collections.length > 0) {
    //     (db.collections as any[])
    //         .filter(col => col.sync)
    //         .map(col => col.name)
    //         .map(colName => (db as any)[colName].sync(syncURL + colName + '/'));
    // }

    return db;
};

export function get(): Promise<NiraniaDatabase> {
    if (!dbPromise)
        dbPromise = _create();
    return dbPromise;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get
};
