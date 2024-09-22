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
	
  appendto = document.createElement("div")
  
  appendto.classList.add("MsgSection")

  document.body.appendChild(appendto)
  
  timepara = document.createElement("p")
  
  msgpara = document.createElement("p")
  
  currenttime = document.createTextNode(time)
  msg = document.createTextNode(sentfrom + ": " + message)
  
  timepara.appendChild(currenttime)
  
  msgpara.appendChild(msg)
  
  appendto.appendChild(timepara)
  appendto.appendChild(msgpara)
  
}

var prefix = "!"

const commands = {
	"help" : function help(){createText("Server","Commands: help",getTime())}
}

var username = prompt("Enter User: ","")

if (username == null || username == "" || username.toLowerCase() == "jude" || username.toLowerCase() == "server"){
  username = randomstring(10)
}


createText('Server','Welcome!',getTime())

websocket.addEventListener("open", (event) => {
  message = getTime() + "dsfejvcjkdrgkjbhjdkjb" + "Server" + "dsfejvcjkdrgkjbhjdkjb" + username + " Has Connected!"
  websocket.send(message)
});

websocket.addEventListener("message", (event) => {
	received = String(event.data)
  split = received.split("dsfejvcjkdrgkjbhjdkjb")
  timesent = split[0]
  sentby = split[1]
  message = split[2]
  createText(sentby, message, timesent)
});

 document.onkeydown = function (key){
	 if (String(key.code) == 'Enter'){
   		msg = document.getElementById('TextIn').value
      		document.getElementById('TextIn').value = ""
		 if (msg.startsWith(prefix)){
			 var tempn = 0
			 split = msg.slice(1).split(' ')
			 while (tempn < Object.keys(commands).length){
				 if (String(Object.keys(commands)[tempn]) == String(split[0]).toLowerCase()){
         				command = String(Object.keys(commands)[tempn])
         				alert(commands[command])
         			}
			 }
		 }
		 else{
			 websocket.send(getTime() + "dsfejvcjkdrgkjbhjdkjb" +username + "dsfejvcjkdrgkjbhjdkjb" + msg)
		 }
	 }
 }
