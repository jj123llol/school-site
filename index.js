function create(url) {
    var win = window.open();
    
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

function addfunctionality(button,link){
    document.getElementById(button).onclick = function() {
        create(link);
    }
}

var normalPasswords = []

function MakePassword(password){
    normalPasswords.push(password)
}

/*

Feel Free To Add Your Own Passwords, Might Make A Login System With Saved Usernames And Passwords Later, Maybe Even A ChatRoom.

For Now Passwords Are Just So Random People Cant Get In   ( I Doubt Anyone At Our School Is Smart Enough To Look At The Source. )

*/

MakePassword("Pizzarolls123")


var enteredpassword = window.prompt("Enter Password: ","")

function checkpassword(pass){
    var tempnumber = 0
    while (tempnumber < normalPasswords.length){
        if(pass == normalPasswords[tempnumber]){
            return "normal user"
        }
        tempnumber = tempnumber + 1
    }
}


function loadlinks(){

    addfunctionality('EaglerCraft 1.8','https://jj123llol.github.io/school-site/Eaglercraft%201.8%20offline.html')
    
    addfunctionality('EaglerCraft 1.5','https://jj123llol.github.io/school-site/minecraft%201.5.2.html')
    
    addfunctionality('impquiz','https://impossible-quiz-zeta.vercel.app/')

    addfunctionality('impquiz2','https://impossible-quiz-e.vercel.app/')

    addfunctionality('impquiz3','https://impossible-quiz-e-git-main-broplsss.vercel.app/')

    addfunctionality('unfair','https://unfair-mario-eeic.vercel.app/')

    addfunctionality('FNAFButtonOne','https://schoolprojectsecret.github.io/Five-Nights-at-Freddys-Web/')

    addfunctionality('DoomButtonOne','https://gamertime.callums-stuff.net/')
    
    addfunctionality('FNAC','https://bandruf.github.io/fnaf-HTML-/')

    addfunctionality('EdgeSurf','https://rbeesley.github.io/MicrosoftEdge-SURF/')

    addfunctionality('pumpfren','https://drive.google.com/uc?export=download&id=1KotOq5xHEVSZ-aJmZxMBtj7t8Czl8o6M')

    addfunctionality('osu','https://drive.google.com/uc?export=download&id=1BNUjgY1yCBcWhgPBYz6fM7BBLFbqWIOr')

    addfunctionality('TOR','https://drive.usercontent.google.com/download?id=1COlNPZV_xQhcQA3s22Rdd2L-bEJRGhmU&export=download&authuser=0')
}

returned = checkpassword(enteredpassword)

if (returned == "normal user") {
    loadlinks()
} else {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
    window.alert("Incorrect Password!")
}
