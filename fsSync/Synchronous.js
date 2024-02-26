const fs = require("fs");

// Write in file
fs.writeFileSync("bio.txt", "MOAZ : Student ");

// Append or add some thing in file
fs.appendFileSync("bio.txt", " ABDULLAH : Father");

// Read File In binary
fs.readFileSync("bio.txt");

// Read File In direct string # Encoding
// fs.readFileSync("bio.txt");
// const obj = fs.readFileSync("newbio.txt", "utf-8");
// console.log(obj);

// Read File in Stirng
const obj = fs.readFileSync("bio.txt");
new_obj = obj.toString();
console.log(new_obj);

// Rename File
fs.renameSync("bio.txt", "newbio.txt");

// Deleting File and error handling
// try {
//   fs.unlinkSync("newbio.txt");
//   console.log("File deleted successfully");
// } catch (err) {
//   console.error("Error deleting file:", err);
// }
