import {RxDB} from 'rxdb';

const DBName = 'niraniaDB';
let DB, levelCollection, soundCollection;

const levelSchema = {
  title: 'level schema',
  description: 'describes a level',
  type: 'object',
  properties: {
    level: {
      type: 'number',
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
      type: 'boolean',
      primary: true
    }
  }
};

export let Database{
  create: async function(){
    if(!DB){
      DB = await RxDB.create(DBName, 'idb');
      levelCollection = DB.collection('level', levelSchema);
      soundCollection = DB.collection('sound', soundSchema);
    }
  },
  updateLevel: function(level, success, diamonds){
    let obj = {
      level: level,
      success: null,
      diamonds: null
    };
    //get and check if exists
    levelCollection.findOne().where('level').eq(level).exec()
    .then(doc => {
      if(doc){
        obj.success = doc.success;
        obj.diamonds = doc.diamonds;
      }
      if(success) obj.success = success;
      if(diamonds) obj.diamonds = diamonds;
      levelCollection.insert(obj);
    });
  },
  updateSound: function(sound){
    soundCollection.insert({
      sound: sound
    });
  },
  getSound: function(){
    return soundCollection.findOne();
  },
  getLevelSettings: function(level){
    return levelCollection.findOne().where('level').eq(level).exec();
  }
}
