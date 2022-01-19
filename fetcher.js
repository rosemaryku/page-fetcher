const fs = require("fs");

// Capture the two command line arguments (1) a URL (2) a local file path
const args = process.argv.slice(2);
const URL = args[0];
const localPath = args[1];

// Make an http request and wait for a response using request
const request = require("request");

request(URL, (error, response, body) => {
  fs.writeFile(localPath, body, { flag: "a+" }, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
  });
});
