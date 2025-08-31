const yargs = require('yargs');
const {hideBin} = require("yargs/helpers");

const {initRepo} = require("./controllers/init");
const {addChanges} = require("./controllers/add");
const {commit} = require("./controllers/commit");
const {log} = require("./controllers/log");

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
    command: "push",
    describe: "Pushes files to remote repo",
    builder: {},
    handler: initRepo
  })
  .command({
    command: "pull",
    describe: "Pull files from remote Repo",
    builder: {},
    handler: initRepo
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
    handler: initRepo 
  })
  .command({
    command: "status",
    describe: "Status of the files in the current repo",
    builder: {},
    handler: initRepo
  })
  .command({
    command: "log",
    describe: "Commit history",
    builder: {},
    handler: log
  })
  .help()
  .parse();