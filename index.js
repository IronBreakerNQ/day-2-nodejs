const fs = require('fs');
const path = require('path');
require('dotenv').config();


const fullPath = path.join(__dirname, 'data.json');
console.log("__dirname",fullPath);
const FileName= path.join(__filename,fullPath);
console.log("__filename",FileName);


// Truy cập biến môi trường
const environment = process.env.NODE_ENV;
const port = process.env.PORT;
const dbHost = process.env.DB_HOST;

console.log(`Environment: ${environment}`);
console.log(`Port: ${port}`);
console.log(`Database Host: ${dbHost}`);

console.log('Command Line Arguments:');
process.argv.forEach((arg, index) =>{
    console.log(`${index} : ${arg}`)
})

console.log(`Current Working Directory: ${process.cwd()}`);

const memoryUsage = process.memoryUsage();
console.log('Memory Usage:');
console.log(`RSS: ${memoryUsage.rss}`);
console.log(`Heap Total: ${memoryUsage.heapTotal}`);
console.log(`Heap Used: ${memoryUsage.heapUsed}`);

setTimeout(() =>{
    console.log('exit');
    process.exit(0);
},3000)