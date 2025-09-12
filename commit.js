const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

async function commit(message) {
    try {
        const commitId = uuidv4();

        
        await fs.mkdir(path.resolve(process.cwd(), ".LocalRepo", "commits"), { recursive: true });
        const commitDir = path.resolve(process.cwd(), ".LocalRepo", "commits", commitId);
        await fs.mkdir(commitDir, { recursive: true });

        
        const stagingPath = path.resolve(process.cwd(), ".LocalRepo", "staging");
        const files = await fs.readdir(stagingPath);

        for (const file of files) {
            await fs.copyFile(path.join(stagingPath, file), path.join(commitDir, file));
            await fs.unlink(path.join(stagingPath, file));
        }

        
        const logFile = path.resolve(process.cwd(), ".LocalRepo", "commit.json");

        
        let commits = {};
        try {
            const data = await fs.readFile(logFile, "utf-8");
            commits = JSON.parse(data);
        } catch (err) {
            console.log(err);
        }

        
        commits[commitId] = {
            message,
            date: new Date().toISOString()
        };

        
        await fs.writeFile(logFile, JSON.stringify(commits, null, 2));

        console.log(`Commit "${message} successful`);
    } catch (err) {
        console.error("Could not commit", err);
    }
}

module.exports = { commit };
