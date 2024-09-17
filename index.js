if(window.location.href == 'https://jj123llol.github.io/school-site/'){
    create(url)
    window.close()
}

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
    document.getElementById('EaglerCraft 1.8').onclick = function() {
        create('https://jj123llol.github.io/school-site/Eaglercraft%201.8%20offline.html');
    }
    document.getElementById('EaglerCraft 1.5').onclick = function() {
        create('https://jj123llol.github.io/school-site/minecraft%201.5.2.html');
    }
    document.getElementById('UwUClient').onclick = function() {
        create('https://github.com/jj123llol/school-site/releases/download/release/uwuclient.html');
    }
    document.getElementById('impquiz').onclick = function() {
        create('https://impossible-quiz-zeta.vercel.app/');
    }
    document.getElementById('impquiz2').onclick = function() {
        create('https://impossible-quiz-e.vercel.app/');
    }
    document.getElementById('impquiz3').onclick = function() {
        create('https://impossible-quiz-e-git-main-broplsss.vercel.app/');
    }
    document.getElementById('unfair').onclick = function() {
        create('https://unfair-mario-eeic.vercel.app/');
    }
    document.getElementById('FNAFButtonOne').onclick = function() {
        create('https://schoolprojectsecret.github.io/Five-Nights-at-Freddys-Web/');
    }
    document.getElementById('DoomButtonOne').onclick = function() {
        create('https://gamertime.callums-stuff.net/');
    }
    document.getElementById('FNAC').onclick = function() {
        create('https://bandruf.github.io/fnaf-HTML-/', '_blank');
    }
    document.getElementById('EdgeSurf').onclick = function() {
        create('https://rbeesley.github.io/MicrosoftEdge-SURF/');
    }
    document.getElementById('TOR').onclick = function() {
       create('https://drive.usercontent.google.com/download?id=1COlNPZV_xQhcQA3s22Rdd2L-bEJRGhmU&export=download&authuser=0');
    }
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
