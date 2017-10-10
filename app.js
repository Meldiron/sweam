var electron = require("electron");
var url = require("url");
var path = require("path");
var fs = require("fs");
var { app, BrowserWindow } = electron;




var api = require("express")();
var http = require("http").Server(api);
var io = require("socket.io")(http);





io.on("connection", function(socket) {
  var obj = JSON.parse(fs.readFileSync("save.json"));
  var os = process.platform;
  console.log("connected");
  io.sockets.emit("send", obj);
  io.sockets.emit("os", os)
  socket.on("return", function(message) {
    obj = JSON.stringify(message, null, 1);
    fs.writeFile("save.json", obj);
    mainWindow.reload();
  });
});


http.listen(9000, function() {
  console.log("listening on 9000")
})


/*
//read json
var data = JSON.parse(fs.readFileSync("save.json"));
console.log(data);
data.usrName.push("fuck");
//write to json 
var data = JSON.stringify(data, null, 1);
fs.writeFile("save.json", data, finished);

function finished() {
  console.log("finished")
}*/


var mainWindow;

//wait for app to be ready
app.on("ready", function() {
  //create new window
  var data = JSON.parse(fs.readFileSync("save.json"));
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    "minHeight": 600,
    "minWidth": 640
  });
  /*//remove top menu
  mainWindow.setMenu(null);*/
  //load HTML into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "web/index.html"),
    protocol: "file",
    slashes: true
  }));
});