const fs = require("fs");

const file = fs.writeFile("Async.txt", "I am Using Asunchronous", (err) => {
  console.log("file is created using Async");
  console.log(err);
});

// fs.appendFile("Async.txt", " HELLO", (err) => {
//   console.log("DONE");
// });

fs.readFile("Async.txt", "utf-8", (err, resp) => {
  console.log(resp);
  console.log("READING DONE");
});
// console.log(file);
