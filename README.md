# Version-Control-System

This project is a simplified version control system (similar to Git) built with **Node.js** and **Yargs**.  
It allows you to:

- Initialize a repository  
- Add files to a staging area  
- Commit changes with messages  
- View commit history  
- Revert to previous commits  



### 🚀 Features
- **init** → Initializes a new local repository (`.LocalRepo` folder).  
- **add \<file\>** → Stages a file for the next commit.  
- **commit -m "message"** → Commits staged files with a message.  
- **log** → Displays commit history.  
- **revert \<commit-id\>** → Reverts project files back to a specific commit.  





### ⚙️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/binduanand/Version-Control-System
   cd Version-Control-System

2. Install dependencies:
   npm install


### 🖥️ Usage
Run commands using Node.js:

1. Initialize Repository - node server.js init
2. Add File to Staging Area - node server.js add <file>
3. Commit Changes - node server.js commit -m "message"
4. View Commit History - node server.js log
5. Revert to a Commit - node server.js revert <commit-id>



### 🗂️ How It Works
- Staging Area → .LocalRepo/staging stores added files.
- Commits → Stored in .LocalRepo/commits/<commit-id>.
- Commit Log → Tracked in .LocalRepo/commit.json.
- Revert → Copies files from a commit directory back into the working directory.

### 🛠️ Tech Stack
 - Node.js
 - Yargs → CLI framework
 - UUID → Generates unique commit IDs
 - fs / path → File system handling
