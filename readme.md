# Git Commands

Git init - Create a new git repo <br>
Git status - view the changes to your project code <br>
Git add - Add files to staging <br>
Git commit - creates a new commit with files from staging area <br>
Git log - view recent commits <br>


# Start with firebase.
1. create 2 enviroment files <br>
  - .env.development <br>
  - .env.test
    * then add your firebase credentials to them in the following format: <br>
    FIREBASE_API_KEY=AIzafAdim8Danr
    FIREBASE_AUTH_DOMAIN=app-name-name-df74b.firebaseapp.com
    FIREBASE_DATABSE_URL=https://yourappname.firebaseio.com
    FIREBASE_PROJECT_ID=pp-name-name-df74b
    FIREBASE_STORAGE_BUCKET=pp-name-name-df74b.appspot.com
    FIREBASE_MESSAGING_SENDER_ID=854323454345
    FIREBASE_ID=1:345654345432:web:234567876543
  
# View your new webapp on your localhost
yarn run dev-server <br>
"dev-server": "webpack-dev-server",

# All commands
yarn run <command> <br>

    "build:prod": "webpack -p --env production",
    "dev-server": "webpack-dev-server",
    "test": "cross-env NODE_ENV=production jest --config=jest.config.json",
    "start": "node server/server.js",
    "heroku-postbuild": "yarn run build:prod"
