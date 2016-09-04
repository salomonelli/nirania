module.exports = (function(){
  var _langs = {
    de: require('./de'),
    en: require('./en')
  };

  /**
   * Represents language
   */
  function l(lang){
    return _langs[lang];
  }

  return l;
})();
