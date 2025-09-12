const fs = require("fs").promises;
const path = require("path");


async function initRepo(){
    const repoPath = path.resolve(process.cwd(), ".LocalRepo");
    
    try{
        await fs.mkdir(repoPath, {recursive : true});
        await fs.writeFile(path.join(repoPath,"config.js"), JSON.stringify({}, null, 2));
        console.log("Repository initialized");
    }catch(err){
        console.error("Error Initializing Repo", err);
    }
}

module.exports = {initRepo};
