var fakenames = {
  "Home - Google Drive" : "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
  "Login" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADt0lEQVR4AexVA5AgQRB727Zt27Zt27Zt27Zt+8+2bTvfm+O+7anKYpRMa+KxNZhVR3BbECjAjwU5bpMziryuwFiAnwxjcsvjlgC/CLcUAQG/SgC5+fEr8V/AfwExH/VnIl49QX3VBNXYB/r5/hABx+vOIPj9IQGZOyxFod5rkab1QtWE+A1nI2eXFSjYaw2SN5+vGssStSZv91VI1HjOO+ISyVplXcNJe9B48l4U77ceSZvM5dg7AlYcewhnTz/0WnKSaqP7kzebh1MP9GHl5Ikao3fEjCWT/iO3teHs4QdDaxdUGLpZTsgxEmRsuxjLjz6ArYs3QsPCERYezv33XtNAgR6ro0VQAM2+49JLKG3ImnMqASnk1Pe0LRESGoZ6E3bHmLLsoE0kj26Tt12LWZe06VxsOf8c0kh68KYW9gmxo7sv+84/NkRasTRFfIUAYvzmy5xv4eDBE954Zca5yljDiXvgGxAMT99AtJ9zBPGjONrNOcw+/6AQNJmyj3PfFbDqLOLVmgYO1pmB5OKze1oWKgEK0bWXpiQeu+kyjGxc4e4TgApDNsua6Vh65D6UdvKeHhLHxgb9323hcXScewTZOi17vwWO39XFqA2XlI2JSWJaM3t3BIWEggJqT6e/hZDEubuupF+VNmHLFRKdvK/H/+k7b6isSURa8EMx8OEWIGaLFDCN/lbajosvuVnPRSf4f/W5CdK0WohLz4z5P2r9RbUANd4vYOflV+iy4Bi6y6aKufouOw0DaxexQBjqjt/NALv12pxzB6w8g1QtF6DisC2wd/OBq5c/3XD0tg7HZ+66+eUCGAM1p0bFwHRVDNQeu5MEivkjIiJgLgGoZ+nMNAwMDo059dx9t8EYuK+KAdaF8Zuv4MANTQYh0/YLsoACpmyn+fHK2J7W2n31NXbJ+4qYPzrFmkzey2j3ELSdfRjMAkG1kdth7eyFcBHfef4x8ny2gGBxQZuZh3Bbw5wbdJp3lPNkLU9SpM9a2Ll6M+8rSpCuOvEIMg1OHr4sWEotsHT0IMdDHStk7Rg3CwTLjjygH3ssPqESIBWPmWFs64ohq89B08wRj3StkavLClVJTSKu2iPWsBURSuyklthYcPAuK6hYjynr4uWHE/d0UXrgRnUWKMjYbgnydV/FoHrrLqDaPN1WIkPbxaz7Sg4nkP63Aorj+XqsQvo2i0mQsOEs/ivB20CKU4n+65Gs6TxW0i+/DdVg/2fdjvU/8zZ8sxHbIBl1wIB3TAa8azbgndMB754DAB14NONgV8yeAAAAAElFTkSuQmCC",
  "Qin dynasty - Google Search" : "data:image/png;base64,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"
}


function getfakename(){
  var name = Object.keys(fakenames)[(Math.random() * Object.keys(fakenames).length) | 0]
  
  var imglink = fakenames[name]
  
  var fakename = name
  
  return imglink + " | " + fakename
}


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
    

function create(url) {
    var faked = getfakename().split(" | ")
    var fakename = faked[1]
    var fakelink = faked[0]
    var win = window.open();

    win.document.title = fakename

    var link = win.document.querySelector("link[rel~='icon']");
    if (!link){
      link = win.document.createElement('link')
      link.rel = 'icon';
      win.document.head.appendChild(link);
    }
    link.href = fakelink
    
    win.document.body.style.margin = '0';

    win.document.body.style.height = '100vh';
    
    var iframe = win.document.createElement('iframe');
    
    iframe.style.border = 'none';
    
    iframe.style.width = '100%';
    
    iframe.style.height = '100%';
    
    iframe.style.margin = '0';
    
    iframe.src = url;
    
    win.document.body.appendChild(iframe);
}

function addFunctionality(button,link){
    document.getElementById(button).onclick = function() {
        create(link);
    }
}

function openPageFunctionality(button,link){
    document.getElementById(button).onclick = function() {
        window.open(link,'_blank');
    }
}

var normalPasswords = []

function makePassword(password){
    normalPasswords.push(password)
}

/*

Feel Free To Add Your Own Passwords, Might Make A Login System With Saved Usernames And Passwords Later, Maybe Even A ChatRoom.

For Now Passwords Are Just So Random People Cant Get In   ( I Doubt Anyone At Our School Is Smart Enough To Look At The Source. )

*/

makePassword("Pizzarolls123")

var enteredPassword = window.prompt("Enter Password: ","")

function checkPassword(pass){
    for (let i = 0; i < normalPasswords.length; i++) {
        if (pass == normalPasswords[i]){
            return true
        }
    }
}


function loadLinks(){

    openPageFunctionality('EaglerCraft 1.8','https://jj123llol.github.io/school-site/Eaglercraft%201.8%20offline.html')
    
    openPageFunctionality('EaglerCraft 1.5','https://jj123llol.github.io/school-site/minecraft%201.5.2.html')
    
    addFunctionality('impquiz','https://impossible-quiz-zeta.vercel.app/')

    addFunctionality('impquiz2','https://impossible-quiz-e.vercel.app/')

    addFunctionality('impquiz3','https://impossible-quiz-e-git-main-broplsss.vercel.app/')

    addFunctionality('unfair','https://unfair-mario-eeic.vercel.app/')

    addFunctionality('FNAFButtonOne','https://schoolprojectsecret.github.io/Five-Nights-at-Freddys-Web/')

    addFunctionality('DoomButtonOne','https://gamertime.callums-stuff.net/')
    
    addFunctionality('FNAC','https://bandruf.github.io/fnaf-HTML-/')

    addFunctionality('EdgeSurf','https://rbeesley.github.io/MicrosoftEdge-SURF/')

    addFunctionality('pumpfren','https://drive.google.com/uc?export=download&id=1KotOq5xHEVSZ-aJmZxMBtj7t8Czl8o6M')

    addFunctionality('osu','https://drive.google.com/uc?export=download&id=1BNUjgY1yCBcWhgPBYz6fM7BBLFbqWIOr')

    addFunctionality('TOR','https://drive.usercontent.google.com/download?id=1COlNPZV_xQhcQA3s22Rdd2L-bEJRGhmU&export=download&authuser=0')
}

if (checkPassword(enteredPassword)) {
    loadLinks()
} else {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
    window.alert("Incorrect Password!")
}
