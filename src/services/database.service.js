import * as RxDB from 'rxdb';
RxDB.plugin(require('pouchdb-adapter-idb'));
RxDB.plugin(require('pouchdb-replication')); //enable syncing
RxDB.plugin(require('pouchdb-adapter-http')); //enable syncing over http

const syncURL = 'http://' + window.location.hostname + ':10102/';
console.log('host: ' + syncURL);
// const syncURL = host;

let dbPromise = null;

const _create = async function() {
    console.log('DatabaseService: creating database..');
    const db = await RxDB.create({
        name: 'niraniadb',
        adapter: 'idb',
        password: 'myLongAndStupidPassword'
    });
    console.log('DatabaseService: created database');
    window['db'] = db; // write to window for debugging

    // show leadership in title
    /*
    db.waitForLeadership().then(() => {
        console.log('isLeader now');
        document.title = '♛ ' + document.title;
    });
     */
    // sync
    console.log('DatabaseService: sync');
    if (db.collections.length > 0) {
        db.collections
            .filter(col => col.sync)
            .map(col => col.name)
            .map(colName => db[colName].sync(syncURL + colName + '/'));
    }

    return db;
};

export function get() {
    if (!dbPromise)
        dbPromise = _create();
    return dbPromise;
}
