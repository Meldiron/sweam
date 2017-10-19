// Settings
const appPort = 3000;

let users = [];

// Requires
const electron = require("electron");
const url = require("url");
const path = require("path");
const fs = require("fs");
const { app, BrowserWindow, shell } = electron;
const { exec } = require("child_process");
const express = require("express");
const api = express();
const http = require("http").Server(api);
const io = require("socket.io")(http);
const request = require('request');
const fs_extra = require('fs-extra');
const uuid = require('uuid/v1');

io.on("connection", function(socket) {
  console.log("Connected");
  socket.emit('newData', users);

  socket.on('openUrl', (data) => {
    console.log("New data, " + data);
    electron.shell.openExternal(data);
  });

  socket.on('editShowPass', (data, callback) => {
    let index = -1;
    for(var i = 0; i < users.length; i++) {
      if(users[i].id == data.id) {
        index = i;
        break;
      }
    }

    if(data.val != true && data.val != false) {
      callback({ status: 'error', msg: 'Unexpected error. Reload app please.' });
    }

    if(index != -1) {
      console.log(data.val);
      users[index].showPass = data.val;
      console.log(users[index].displayName);
      socket.emit('newData', users);
      callback({ status: 'success' });
    } else {
      callback({ status: 'error', msg: 'User not found. Reload app please.' });
    }
  });

  socket.on('removeAccount', (data, callback) => {
    let index = -1;
    for(var i = 0; i < users.length; i++) {
      if(users[i].id == data) {
        index = i;
        break;
      }
    }

    if(index != -1) {
      if(fs.existsSync(__dirname + "/storage/photos/" + users[index].id + ".png")) {
        fs.unlink(__dirname + "/storage/photos/" + users[index].id + ".png", (err) => {
          if(err) {
            callback({ status: 'error', msg: 'Can\t remove photo.' });
          } else {
            users.splice(index, 1);
            console.log("spliced");
            console.log(users);
            socket.emit('newData', users);
            callback({ status: 'success' });
          }
        });

      } else {
        users.splice(index, 1);
        socket.emit('newData', users);
        callback({ status: 'success' });
      }
    } else {
      callback({ status: 'error', msg: 'User not found. Reload app please.' });
    }
  });

  socket.on('newUser', (data, callback) => {
    data.showPass = false;

    if(data.displayName == '') {
      return callback({ status: "error", msg: "Display name can't be empty." });
    } else if(data.description == '') {
      data.description = "No description";
    } else if(data.name == '') {
      return callback({ status: "error", msg: "Steam username can't be empty." });
    } else if(data.password == '') {
      return callback({ status: "error", msg: "Steam password can't be empty." });
    }

    for(var i = 0; i < users.length; i++) {
      if(data.displayName == users[i].displayName) {
        return callback({ status: "error", msg: "User with display name '" + data.displayName + "' already exists." });
      } else if(data.name == users[i].name) {
        return callback({ status: "error", msg: "User with steam username '" + data.name + "' already exists." });
      }
    }


    let newid = uuid();
    data.id = newid;

    if(data.img == '') {
      data.img = "http://localhost:" + appPort + "/assets/images/steam.svg";
      users.push(data);
      socket.emit('newData', users);
      socket.emit('setActive', users.length - 1);
      return callback({ status: 'success' });
    } else {

      fs_extra.copy(data.img, __dirname + "/storage/photos/" + newid + ".png", (err) => {
        if(err) {
          return callback({ status: 'error', msg: 'Unexpected error whiel saving image.' });
        }


        data.img = "http://localhost:" + appPort + "/photos/" + newid;

        users.push(data);
        socket.emit('newData', users);
        socket.emit('setActive', users.length - 1);
        return callback({ status: 'success' });
      });
    }
  });
});

api.get('/photos/:id', (req, res) => {
  if(fs.existsSync(__dirname + "/storage/photos/" + req.params.id + ".png")) {
    res.sendFile(__dirname + "/storage/photos/" + req.params.id + ".png");
  } else {
    res.sendFile(__dirname + "/angular/dist/assets/images/steam.svg");
  }
});

api.use(express.static(__dirname + "/angular/dist"));

http.listen(appPort, "127.0.0.1", function() {
  console.log("listening on " + appPort);
});


var mainWindow;

// Wait for app to be ready
app.on("ready", function() {
  // Create new window
  var data = JSON.parse(fs.readFileSync("save.json"));
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    "minHeight": 540,
    "minWidth": 360,
    webPreferences: {
      webSecurity: false
    }
  });

  // Remove top menu
  // mainWindow.setMenu(null);

  // Load HTML into window
  mainWindow.loadURL(url.format({
    pathname: "localhost:" + appPort + "/",
    protocol: "http",
    slashes: true,
  }));

  app.on('window-all-closed', function() {
    app.quit();
    console.log("Quitting sweam...");
  });
});