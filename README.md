# fchat

> sinple chat

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/fchat; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## This app

https://www.youtube.com/watch?v=CuM4vLkBaik chat intro
nom install -g yo
npm install -g generator-feathers
mkdir fchat
cd fchat
yo feathers
=> enter details

yo feathers:service
Created jabz

localhost:3030/jabz   Gives the messages
   Can search on id=1234 or text=xxxx   
    
convert to socket chat
<script src="https://unpkg.com/feathers-client@^2.0.0/dist/feathers.js"></script>
<script src="/socket.io.min.js"></script>

Needed to add socket.io.min.js into public

Added chat html

Used mongo db, all messages written to there
