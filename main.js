var Editus = require('editus');

var keyWordsArray = ["create", "experiment", "assign", "to", "all", "users", "where", "for", "salt", "new"];

window.onload = function(){
    var editor1 = Editus.initEditus('content1');
    editor1.setHighlightingWords(keyWordsArray);
    var editor2 = Editus.initEditus('content2');
    editor2.setHighlightingWords(['a','b','c']);
};
