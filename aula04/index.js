const fs = require('fs').promises;
const path = require('path');

fs.readdir(path.resolve(__dirname))
.then(response=> console.log(response))
.catch(e=>console.log(e));

async function readdir(rootdir){
    rootdir = rootdir||path.resolve(__dirname)
    const files = await fs.readdir(rootdir);
    walk(files);
};
function walk(files){
    for(let file of files){
        console.log(file);
    }
};
readdir();
