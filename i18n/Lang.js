module.exports = (function(){
  var langs = {
    de: require('./de'),
    en: require('./en')
  };

  function l(lang){
    return langs[lang];
  }

  return l;
})();
