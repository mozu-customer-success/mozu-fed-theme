# Getting Your Mozu Theme Development Environment Up and Running

## Before we begin

You should have the following software(s) setup on the machine you will be viewing the session in:

1. A text editor/IDE of your choosing:
    - [Sublime Text](http://www.sublimetext.com/) and [Visual Studio Code](https://code.visualstudio.com/) are good cross-platform options for Win/OSX/Linux:
        - Sublime Text users may benefit from the following packages:
            - [Package Control](https://packagecontrol.io/installation): Package manager for Sublime Text
            - [Djaniero](https://packagecontrol.io/packages/Djaneiro): Syntax highlighting for `hypr/hypr.live` files
            - [Django](https://packagecontrol.io/packages/Django): Tab completion for `hypr/hypr.live` files)
            - [LESS](https://packagecontrol.io/packages/LESS): Syntax highlighting for LESS files
            - [Emmet](https://packagecontrol.io/packages/Emmet): Template markup generator using CSS style selector structures
            - [Alignment](https://packagecontrol.io/packages/Alignment): Code alignment tool for better formatting controls
1. A terminal/shell application of your chooosing


-----

**NOTE:** For the purpose of this training session, we will use BASH shell as it is widely supported in many UNIX environments.


**FOR WINDOWS USERS**

We recommend using [Git Bash](https://msysgit.github.io/) which is a fully featured BASH terminal that works consistently with existing BASH flavors on UNIX systems. However:

- If you prefer Cmd/PowerShell, you may need to use different commands to complete this tutorial, OR you may optionally install [GOW (Gnu on Windows)](https://github.com/bmatzelle/gow/wiki).
- If you don't like the existing commandline/powershell utilities, try [Cmder](https://github.com/cmderdev/cmder) as this provides a much better developer experience with syntax highlighting and better tab completion for system commands and file path completion.


-----

## Installation

1. Install your text editor of choice.
1. Make sure the following utility versions are correct by running these commands in your terminal:

    ``` bash
    $ git --version   # should be 2.X.X+
    $ node -v         # should be 4.X.X+
    $ npm -v          # should be 3.X.X+; installed with Node.js
    ```

1. Install Git, and/or Node.js binaries as needed:
    - **Git**: [http://git-scm.com/downloads](http://git-scm.com/downloads)
        - We suggest that Windows folks install Git Bash when prompted
        - After it is installed, open Git Bash from the Start Menu and continue
    - **Node.js**: [http://nodejs.org/dist](http://nodejs.org/dist)
        - Node latest stable build (5.0.x+) should work just fine
        - For Linux Ubuntu/Debian users, we suggest installing Node.js with NVM
            - [https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server#how-to-install-using-nvm](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server#how-to-install-using-nvm)


## Setting up the project folder

We will need a project folder to host our theme(s), so in your shell app, enter the following commands:

```bash
# if you do not have a preferred folder for keeping your repos
$ mkdir ~/github

# other wise, use your preferred folder
$ cd github

# clone the demo theme from Github
$ git clone https://github.com/mozu-customer-success/mozu-fed-theme.git

# navigate into our demo theme folder
$ cd mozu-fed-theme

# Install our Node dependencies
$ npm i

#  Wait for npm to finish installing...

# try running the build tools
$ npm run grunt
```

If the build runs without fail, you're ready to get started!


## Next steps

We will be performing this same set of instructions as part of our theme setup check during training, though we highly suggest attempting these instructions prior to your scheduled training date helps to identify potential system issues ahead of time.

Additionally, look for an invitation to the Developer Training Dev account in the email you provided when you registered.


Happy Coding!
