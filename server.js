const yargs = require('yargs');
const {hideBin} = require("yargs/helpers");

const {initRepo} = require("./init");
const {addChanges} = require("./add");
const {commit} = require("./commit");
const {log} = require("./log");
const { revert } = require("./revert");


yargs(hideBin(process.argv))
  .command({
    command: "init",
    describe: "Initialize a new repository",
    builder: {},
    handler : initRepo
  })
  .command({
    command : "add <file>",
    describe: "Add file to Staging Area",
    builder: (yargs) => {
        return yargs.positional("file", {
        describe: "File to add Staging area",
        type: "string"
      });
    },
    handler: (argv) => addChanges(argv.file)
  })
  .command({
    command: "commit",
    describe: "Record staged changes to the repository",
    builder: {
      message: {
        alias: "m",              
        describe: "Commit message",
        type: "string",
        demandOption: true       
      }
    },
    handler: (argv) => commit(argv.message)
  })
  .command({
    command: "revert <commit-id>",
    describe: "Undo the specified commit",
    builder: (yargs) => {
    yargs.positional("commit-id", {
      describe: "Id of the commit to undo",
      type: "string"
    });
  },
  handler: (argv) => revert(argv["commit-id"])
})
  .command({
    command: "log",
    describe: "Commit history",
    builder: {},
    handler: log
  })
  .help()
  .parse();
