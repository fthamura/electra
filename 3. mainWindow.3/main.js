window.onload = function() {
  let msg = "I'm running Node.js:" + process.version;
  + ", Electron" + process.versions["electron"]
  + ", and Chrome" + process.versions["chrome"] ;

  document.querySelector("h1").textContent = msg;
};

let fs = require("fs");
let ul = document.querySelector("ul");
fs.readdir (process.env.HOME, function (err, entries) {
  entries.forEach(function(entry) {
    if (!entry.startWith (".")) {
      let li = document.createElement ("li");
      li.textContent = entry;
      ul.appendChild(li);
    }
  }

};
