var fakenames = {
  "Home - Google Drive" : "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
  "Login" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADt0lEQVR4AexVA5AgQRB727Zt27Zt27Zt27Zt+8+2bTvfm+O+7anKYpRMa+KxNZhVR3BbECjAjwU5bpMziryuwFiAnwxjcsvjlgC/CLcUAQG/SgC5+fEr8V/AfwExH/VnIl49QX3VBNXYB/r5/hABx+vOIPj9IQGZOyxFod5rkab1QtWE+A1nI2eXFSjYaw2SN5+vGssStSZv91VI1HjOO+ISyVplXcNJe9B48l4U77ceSZvM5dg7AlYcewhnTz/0WnKSaqP7kzebh1MP9GHl5Ikao3fEjCWT/iO3teHs4QdDaxdUGLpZTsgxEmRsuxjLjz6ArYs3QsPCERYezv33XtNAgR6ro0VQAM2+49JLKG3ImnMqASnk1Pe0LRESGoZ6E3bHmLLsoE0kj26Tt12LWZe06VxsOf8c0kh68KYW9gmxo7sv+84/NkRasTRFfIUAYvzmy5xv4eDBE954Zca5yljDiXvgGxAMT99AtJ9zBPGjONrNOcw+/6AQNJmyj3PfFbDqLOLVmgYO1pmB5OKze1oWKgEK0bWXpiQeu+kyjGxc4e4TgApDNsua6Vh65D6UdvKeHhLHxgb9323hcXScewTZOi17vwWO39XFqA2XlI2JSWJaM3t3BIWEggJqT6e/hZDEubuupF+VNmHLFRKdvK/H/+k7b6isSURa8EMx8OEWIGaLFDCN/lbajosvuVnPRSf4f/W5CdK0WohLz4z5P2r9RbUANd4vYOflV+iy4Bi6y6aKufouOw0DaxexQBjqjt/NALv12pxzB6w8g1QtF6DisC2wd/OBq5c/3XD0tg7HZ+66+eUCGAM1p0bFwHRVDNQeu5MEivkjIiJgLgGoZ+nMNAwMDo059dx9t8EYuK+KAdaF8Zuv4MANTQYh0/YLsoACpmyn+fHK2J7W2n31NXbJ+4qYPzrFmkzey2j3ELSdfRjMAkG1kdth7eyFcBHfef4x8ny2gGBxQZuZh3Bbw5wbdJp3lPNkLU9SpM9a2Ll6M+8rSpCuOvEIMg1OHr4sWEotsHT0IMdDHStk7Rg3CwTLjjygH3ssPqESIBWPmWFs64ohq89B08wRj3StkavLClVJTSKu2iPWsBURSuyklthYcPAuK6hYjynr4uWHE/d0UXrgRnUWKMjYbgnydV/FoHrrLqDaPN1WIkPbxaz7Sg4nkP63Aorj+XqsQvo2i0mQsOEs/ivB20CKU4n+65Gs6TxW0i+/DdVg/2fdjvU/8zZ8sxHbIBl1wIB3TAa8azbgndMB754DAB14NONgV8yeAAAAAElFTkSuQmCC",
  "Qin dynasty - Google Search" : "data:image/png;base64,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",
  "Home | Schoology" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVR4Ae3WA4ycURiF4TVr27ZtIyijBrVtu0HtRrVt27bttRln32xOkjXv3Whv8mTmar4zM78cErULoW3xD+EI0+sMzdXDL8QiOoko+OAGZqEGnBwy29jUF0FYgon4jPWaa4cQrMEwjEhgNBbhOH7gG5aiVFYC/EJlOOMKNiYI8B+NE6x3jKemPZUxF7/wEC1MB2ik/nDNX8QujEN1OGm+Pq7hC9rYCLAPP7AX1+GDP1iB4lpTGhfwHJVMBziIXXrvhloqHqB9VTRXHe+xDS4mA+zHXfRCeThKN3zDZRTT2iHa28JkgAX4Ax8VnAlvzfVEAJaoXwiPscpkAG+UQ30sU8Fl2ueIdfiZ4K9YikfIZyZAgqaC4/EPzTXWHEEYon4v/EA14wE0XwQvMSvBz/4Gm9SvpwCtbAVwxUWsUd8Tt3FQ/Sr4gva2AhTFS0xRPy+eYKf6NfHVzi/A1Q9T8RP1NVZV6+eo3xHfUN3UWVAIddAaa+CnEI6aH40QtFV/Mh4jv6kA8+GrsecYCnfNVcBrnIYnPHABG01eByqjJ1qiSJJj4RD+obXGuuI3OmiVtbOgJS4jAIM0Xkifsx/uJn+BOlo/EJNxXIWfozcc4YE1+IR6xu6GcFTBGPzGZ5zHGJTU+oJYjX/oZ/R5AE6au4RKKAoXrXNHJ1zGd/SHo5UAUhN1VXQyLsAHJ5IeL6b/giOIxh/8lXfYgZ7wSrOWgYOwOnpJZzRAsfh9ahYDpN1sBsgNkBvgX04HuIT7mIJt8LcdoA2uoiQcsSHBPd8HT1DZZMk4aZKFX5jHAcMAAAAASUVORK5CYII="
}


function getfakename(){
  var name = Object.keys(fakenames)[(Math.random() * Object.keys(fakenames).length) | 0]
  
  var imglink = fakenames[name]
  
  var fakename = name
  
  return imglink + " {|/} " + fakename
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
    var faked = getfakename().split(" {|/} ")
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
