const websocket = new WebSocket("wss://ws.postman-echo.com/raw")

var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function randomstring(letters) {
  var indx = 0
  var string = ""
  while (indx < letters) {
    string = string + alphabet[(Math.floor(Math.random() * alphabet.length))]
    indx = indx + 1
  }
  return string
}

function getTime(){
  today = new Date()
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  return time
}

function createText(sentfrom, message, time){
  message = document.createTextNode(time + "\n" + sentfrom + "\n" + message)
  document.body.appendChild(message)
}

var username = prompt("Enter User: ","")

if (username == null || username == "" || username.toLowerCase() == "jude"){
  username = randomstring(10)
}


createText('Server','Welcome!',getTime())

websocket.addEventListener("open", (event) => {
  websocket.send(username + " Has Connected!");
});

websocket.addEventListener("message", (event) => {
  createText("Message from server ", event.data);
});
