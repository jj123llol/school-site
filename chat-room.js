function getTime(){
  today = new Date()
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  return time
}

function createText(sentfrom, message, time){
  message = document.createTextNode(time + "\n" + sentfrom + "\n" + message)
  document.body.appendChild(message)
}

createText('Server','Welcome!',getTime())
