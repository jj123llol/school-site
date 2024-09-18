var fakenames = {
  "Home - Google Drive" : "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
  "Untitled document - Google Docs" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAA4CAMAAABXNCH6AAAAilBMVEVGh/T///9GiPRPjfVSkPVPjvVOjfVNjPVFh/RRj/VQjvVHiPREhvRMjPVMi/VLi/WmxfpIifRJifRSj/VKivRJivT29fLR2/JCgOy0yPP++vLv8PLg5fFFgOg5gvTD0vJeieE/dt5xovZfl/bZ4fPv9P4tffSVuPh8qPePs/hNgOGhvPO6zfOBpO9Kma+qAAAB3ElEQVRIiX3U63aiMBSG4U+QgxJEEMY6o9uZabGdWu//9gohh52D8/50PSs7CVliNb6/RvtYuWFs6o1uO5emeZ4XRfN3P7ryX702HQ6SZ1mWppN0Kdbr59KhcKAvOQ3k1pGMIhy+naGWluLJcCMNRQB9qSkY5MNzKxVFBPpyodDMg46UFIeDcfJralm/Mnkfjdz4MC/K972zKjbO+1iglHXvUjjvKLNLFkWdfP5mwTLpGKzr5g8LW1NmRyu5211CmWUxyCkyW+rCWTbNZepl6gLXBbDpLypwJp0He0VfkNq0Y3CWgyfz3IdqyWFYKCxSLoRDJ6XHpGNwll3XQQAOc2FtYNtWQGGiWxhJOMmWSTr/DDuTglUFM1K8/Qh7Iw0r1Lryfgq7Cw2t3O1EGC1wlgl2Jgq7kYFM0vFX2JE01HK6PYqfSMMEjU6crmEnMtDKXkQ2KixEb4pAIgutpOs57EoGKjk9hCcn0rDEoBNfx7Av0pDJIbpPNbmcZGcKD2MmTwkryZu+Jwda2fonurLJExRodf4tncgsOEMmW3+ffEElK6dkCc6Cs4ypiGMySVzmQ4HEizPmPAk8dfN9lkww5jmR4CFizHeCPjDeCM5vAZLwNmI1PuT/+P97jKtvr/5/GKcDfBkAAAAASUVORK5CYII=",
  "Login" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADt0lEQVR4AexVA5AgQRB727Zt27Zt27Zt27Zt+8+2bTvfm+O+7anKYpRMa+KxNZhVR3BbECjAjwU5bpMziryuwFiAnwxjcsvjlgC/CLcUAQG/SgC5+fEr8V/AfwExH/VnIl49QX3VBNXYB/r5/hABx+vOIPj9IQGZOyxFod5rkab1QtWE+A1nI2eXFSjYaw2SN5+vGssStSZv91VI1HjOO+ISyVplXcNJe9B48l4U77ceSZvM5dg7AlYcewhnTz/0WnKSaqP7kzebh1MP9GHl5Ikao3fEjCWT/iO3teHs4QdDaxdUGLpZTsgxEmRsuxjLjz6ArYs3QsPCERYezv33XtNAgR6ro0VQAM2+49JLKG3ImnMqASnk1Pe0LRESGoZ6E3bHmLLsoE0kj26Tt12LWZe06VxsOf8c0kh68KYW9gmxo7sv+84/NkRasTRFfIUAYvzmy5xv4eDBE954Zca5yljDiXvgGxAMT99AtJ9zBPGjONrNOcw+/6AQNJmyj3PfFbDqLOLVmgYO1pmB5OKze1oWKgEK0bWXpiQeu+kyjGxc4e4TgApDNsua6Vh65D6UdvKeHhLHxgb9323hcXScewTZOi17vwWO39XFqA2XlI2JSWJaM3t3BIWEggJqT6e/hZDEubuupF+VNmHLFRKdvK/H/+k7b6isSURa8EMx8OEWIGaLFDCN/lbajosvuVnPRSf4f/W5CdK0WohLz4z5P2r9RbUANd4vYOflV+iy4Bi6y6aKufouOw0DaxexQBjqjt/NALv12pxzB6w8g1QtF6DisC2wd/OBq5c/3XD0tg7HZ+66+eUCGAM1p0bFwHRVDNQeu5MEivkjIiJgLgGoZ+nMNAwMDo059dx9t8EYuK+KAdaF8Zuv4MANTQYh0/YLsoACpmyn+fHK2J7W2n31NXbJ+4qYPzrFmkzey2j3ELSdfRjMAkG1kdth7eyFcBHfef4x8ny2gGBxQZuZh3Bbw5wbdJp3lPNkLU9SpM9a2Ll6M+8rSpCuOvEIMg1OHr4sWEotsHT0IMdDHStk7Rg3CwTLjjygH3ssPqESIBWPmWFs64ohq89B08wRj3StkavLClVJTSKu2iPWsBURSuyklthYcPAuK6hYjynr4uWHE/d0UXrgRnUWKMjYbgnydV/FoHrrLqDaPN1WIkPbxaz7Sg4nkP63Aorj+XqsQvo2i0mQsOEs/ivB20CKU4n+65Gs6TxW0i+/DdVg/2fdjvU/8zZ8sxHbIBl1wIB3TAa8azbgndMB754DAB14NONgV8yeAAAAAElFTkSuQmCC"
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
