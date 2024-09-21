function getTime(){
  var time = new Date().getHours() + ":" + new Date().getMinutes + ":" + new Date().getSeconds
}

function createText(sentfrom, message, time){
  message = document.createTextNode(time + "\n" + sentfrom + "\n" + message)
  document.body.appendChild(message)
}

createText('Server','Welcome!',getTime())
