const fs = require("fs").promises;
const path = require("path");

async function revert(commitId) {
  try {
    const logFile = path.resolve(process.cwd(), ".LocalRepo", "commit.json");
    let commits = {};

    try {
      const data = await fs.readFile(logFile, "utf-8");
      commits = JSON.parse(data);
    } catch (err) {
      console.error("No commit history found. Did you commit anything yet?");
      return;
    }

    if (!commits[commitId]) {
      console.error(`Commit ${commitId} not found!`);
      return;
    }

    const commitDir = path.resolve(process.cwd(), ".LocalRepo", "commits", commitId);

    
    try {
      await fs.access(commitDir);
    } catch (err) {
      console.error(`Commit directory for ${commitId} does not exist.`);
      return;
    }

   
    const files = await fs.readdir(commitDir);
    for (const file of files) {
      const src = path.join(commitDir, file);
      const dest = path.resolve(process.cwd(), file);
      await fs.copyFile(src, dest);
    }

    console.log(`Successfully reverted to commit ${commitId}: "${commits[commitId].message}"`);
  } catch (err) {
    console.error("Error while reverting commit:", err);
  }
}

module.exports = { revert };
