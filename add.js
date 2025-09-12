const fs = require("fs").promises;
const path = require("path");

async function addChanges(file) {
    const stagingPath = path.resolve(process.cwd(), ".LocalRepo", "staging");
    try {
        
        await fs.mkdir(stagingPath, { recursive: true });

        const filePath = path.resolve(process.cwd(), file);
        const filename = path.basename(file);

        
        await fs.copyFile(filePath, path.join(stagingPath, filename));

        console.log(`File ${filename} added to Staging area`);
    } catch (err) {
        console.error("Error Adding File", err);
    }
}

module.exports = { addChanges };
