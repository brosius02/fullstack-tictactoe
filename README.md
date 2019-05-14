# fullstack-tictactoe
A full stack, client/server implementation of Tic Tac Toe in JavaScript.

# Preparation

## Install Git

Download and install [git](https://git-scm.com/downloads).  Choose the latest.

Confirm that git is properly installed by entering `git --version` into a command line prompt.  The output should be something like:

```
$ git --version 
git version 2.21.0.windows.1 
```

## Install Nodejs

Download and install [nodejs](https://nodejs.org/en/).  Choose the LTS version.

Confirm that node is installed with `node --version`:

```
$ node --version
v10.15.3
```

Confirm that npm installed with `npm --version`:

```
$ npm --version
6.9.0
```

# Getting Started

## Clone the Repo

First, you'll need to clone this repository to your machine.  Do this by opening a command line prompt and using `cd` to enter the directory where you'd like to save the files.

Enter `git clone https://github.com/qccoders/fullstack-tictactoe`:

```
$ git clone https://github.com/qccoders/fullstack-tictactoe 
Cloning into 'fullstack-tictactoe'... 
remote: Enumerating objects: 144, done.
remote: Counting objects: 100% (144/144), done.
remote: Compressing objects: 100% (93/93), done. eceiving objects:  22% (32/144)
Receiving objects:  40% (58/144)   te: Total 144 (delta 71), reused 117 (delta 48), pack-reused 0
Receiving objects: 100% (144/144), 191.47 KiB | 5.98 MiB/s, done.
Resolving deltas: 100% (71/71), done. 
```

Use `cd fullstack-tictactoe` to enter the new directory containing the code.

## Install Dependencies

This repo contains two projects; the server side code which is stored in `api`, and the front end which is stored in `web`.  `cd` into both of these directories and execute `npm install` to download the dependencies for each project.

```
$ npm install
added 50 packages from 38 contributors and audited 124 packages in 4.112s
found 0 vulnerabilities
```

```
$ npm install
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 1815 packages from 717 contributors and audited 36235 packages in 43.028s
found 87 vulnerabilities (63 low, 9 moderate, 15 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```

Don't worry about these warnings and vulnerabilities right now; that's more of a concern if you were to publish the code.

## Start the Back End

Each project needs to be started independently.  Start the back end by using `cd` to navigate to the `api` directory, then issue the command `npm start`:

```
$ npm start

> fullstack-tictactoe@1.0.0 start C:\Users\JP.WHATNET\source\fullstack-tictactoe\api
> node src/index.js

Tic Tac Toe app listening on port 3001! 
```

## Start the Front End

Open a new command prompt (leaving the previous open), then navigate to the `web` directory, then `npm start`:

```
Compiled successfully!

You can now view web in the browser.

  Local:            http://localhost:3000/        
  On Your Network:  http://192.168.1.34:3000/     

Note that the development build is not optimized. 
To create a production build, use npm run build.  
```

A web browser should launch and navigate to the url above.

## Play!