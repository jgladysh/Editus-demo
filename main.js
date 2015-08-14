var Editus = require('editus');

var keyWordsArray = ["create", "experiment", "assign", "to", "all", "users", "where", "for", "salt", "new"];

window.onload = function(){
    Editus.createEditor('content');
    Editus.setHighlightingWords(keyWordsArray);
};
