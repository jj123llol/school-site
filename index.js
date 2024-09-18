var alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function randomstring(letters){
    var ind = 0
    var string = ""
    while ind < int(letters){
        string = string + alphabet[(Math.floor(Math.random() * alphabet.length))]
    }
    return string
}
    

function create(url) {
    var win = window.open();

    win.document.title = "SDGJKRMSCIOSDJFOHELSDKGJ"
    
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
