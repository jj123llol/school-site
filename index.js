var normalpasswords = []


function MakePassword(password){
    normalpasswords.push(password)
}

/*

Feel Free To Add Your Own Passwords, Might Make A Login System With Saved Usernames And Passwords Later, Maybe Even A ChatRoom.

For Now Passwords Are Just So Random People Cant Get In   ( I Doubt Anyone At Our School Is Smart Enough To Look At The Source. )

*/

MakePassword("Pizzarolls123")


var enteredpassword = window.prompt("Enter Password: ","")

function checkpassword(pass){
    var tempnumber = 0
    while (tempnumber < normalpasswords.length){
        if(pass == normalpasswords[tempnumber]){
            return "normal user"
        }
        tempnumber = tempnumber + 1
    }
}


function loadlinks(){
    document.getElementById('EaglerCraft 1.8').onclick = function() {
        window.open('https://jj123llol.github.io/school-site/Eaglercraft%201.8%20offline.html', '_blank');
    }
    document.getElementById('EaglerCraft 1.5').onclick = function() {
        window.open('https://jj123llol.github.io/school-site/minecraft%201.5.2.html', '_blank');
    }
    document.getElementById('UwUClient').onclick = function() {
        window.open('https://github.com/jj123llol/school-site/releases/download/release/uwuclient.html', '_blank');
    }
    document.getElementById('impquiz').onclick = function() {
        window.open('https://impossible-quiz-zeta.vercel.app/', '_blank');
    }
    document.getElementById('impquiz2').onclick = function() {
        window.open('https://impossible-quiz-e.vercel.app/', '_blank');
    }
    document.getElementById('impquiz3').onclick = function() {
        window.open('https://impossible-quiz-e-git-main-broplsss.vercel.app/', '_blank');
    }
    document.getElementById('unfair').onclick = function() {
        window.open('https://unfair-mario-eeic.vercel.app/', '_blank');
    }
    document.getElementById('FNAFButtonOne').onclick = function() {
        window.open('https://schoolprojectsecret.github.io/Five-Nights-at-Freddys-Web/', '_blank');
    }
    document.getElementById('DoomButtonOne').onclick = function() {
        window.open('https://gamertime.callums-stuff.net/', '_blank');
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
