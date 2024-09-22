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

var muted = []



var commands = {
	"help" : {
  	"args": 0,
    "func": function helpcmd(){createText("Commands",getCmds(),getTime())}
  },
	"mute" : {
  		"args": 1,
 			'func': function mutecmd(person){
  				createText('Server',"Muted " + person,getTime());
    			muted.push(person)}
  		},
  "unmute" : {
  		"args": 1,
    	'func': function unmutecmd(person){
    			createText('Server', "Unmuted " + person,getTime())
          tempn = 0
          while(tempn < muted.length){
          	if (person == muted[tempn]){
            	muted.splice(tempn)
            }
          }
    	}
  }
}

function getCmds(){
	tempn = 0
  var stri = String(Object.keys(commands)[0])
	while (tempn < Object.keys(commands).length){
  	if(tempn != 0){
    	stri = stri + ", " + String(Object.keys(commands)[tempn])
    }
    tempn = tempn + 1
  }
  return stri
}

var username = prompt("Enter User: ","")

var userlength = username.split(' ').length

if (username == null || username == "" || username.toLowerCase() == "jude" || username.toLowerCase() == "server" || userlength > 1){
  username = randomstring(10)
}


createText('Server','Welcome!',getTime())

function isMuted(user){
	tempnumb = 0
  while (tempnumb < muted.length){
  	if (muted[tempnumb] == user){
    	return true
    }
  }
}

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
  if(!isMuted(sentby)){
  	createText(sentby, message, timesent)
  }
});

function runcommand(command,split){
	args = command.args
  if (args == 0){
  	command.func()
  }else if(args == 1){
  	command.func(split[1])
  }
}

 document.onkeydown = function (key){
 
	 if (String(key.code) == 'Enter'){
   		msg = document.getElementById('TextIn').value
      		document.getElementById('TextIn').value = ""
		 if (msg.startsWith(prefix)){
			 var tempn = 0
			 split = msg.slice(1).split(' ')
			 while (tempn < Object.keys(commands).length){
				 if (String(Object.keys(commands)[tempn]) == String(split[0]).toLowerCase()){
         				command = String(split[0]).toLowerCase()
         				runcommand(commands[command],split)
         			}
              tempn = tempn + 1
			 }
		 }
		 else{
			 websocket.send(getTime() + "dsfejvcjkdrgkjbhjdkjb" +username + "dsfejvcjkdrgkjbhjdkjb" + msg)
		 }
	 }
 }
