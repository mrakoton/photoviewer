var exec = require('cordova/exec');

exports.show = function(url, title, options) {
    if( title == undefined ) {
      title = '';
    }
    if(options == undefined) {
      options = {
        share : true
      };
    }

    exec(function(){}, function(){}, "PhotoViewer", "show", [url, title, options]);
};
