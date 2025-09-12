const path = require("path");
const fs = require('fs').promises;

async function log() {
    try{
        const data = await fs.readFile(path.resolve(process.cwd(), ".LocalRepo", "commit.json"), "utf-8");
        const commits = JSON.parse(data);
        console.log(commits);
    }catch(err){
        console.error("Error Logging commits",err);
    }
    
}

module.exports = {log};
