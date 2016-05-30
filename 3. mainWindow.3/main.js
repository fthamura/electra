window.onload = function() {
  var foo1 = "chrome";
  var foo2 = "electron";

   msg = "I'm running Node.js:" + process.version +
   ", Electron" + process.versions[foo1] +
   ", and Chrome" + process.versions[foo2] ;

  document.querySelector("h1").textContent = msg;

  var fs = require("fs");
  var ul = document.querySelector("ul");
  fs.readdir (process.env.HOME, function (err, entries) {
    entries.forEach(function(entry) {
      if ( !entry.startWith ( "." ) ) {
        var li = document.createElement ("li");
        li.textContent = entry;
        ul.appendChild(li);
      }
    });

  });

};
