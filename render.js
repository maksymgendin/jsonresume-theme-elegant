//
// This script will render the response and write it to the index.html file.
//
// Usage:
// `node render`
//
require("resume-schema");
let fs = require('fs');
let theme = require("./index.js");

fs.writeFile("./build/index.html", render(), function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("index.html written to build folder.");
    }
});

function render() {
    try {
        return theme.render(JSON.parse(fs.readFileSync("./node_modules/resume-schema/sample.resume.json", "utf8")));
    } catch (e) {
        console.log(e.message);
        return "";
    }
}
