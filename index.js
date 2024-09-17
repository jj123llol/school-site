var savedpasswords = [
    normalpasswords = [],
    devpasswords = []
]

function MakeNormalPassword(password){
    savedpasswords.normalpasswords.push(password)
}

function MakeDevPassword(password){
    savedpasswords.devpasswords.push(password)
}

/*

Feel Free To Add Your Own Passwords, Might Make A Login System With Saved Usernames And Passwords Later, Maybe Even A ChatRoom.

For Now Passwords Are Just So Random People Cant Get In   ( I Doubt Anyone At Our School Is Smart Enough To Look At The Source. )

*/

MakeNormalPassword("Pizzarolls123")
MakeDevPassword("Dev123")

var enteredpassword = window.prompt("Enter Password: ","")

function checkpassword(pass){
    var tempnumber = 0
    while (tempnumber < savedpasswords.devpasswords.length){
        if(pass == savedpasswords.devpasswords[tempnumber]){
            return "dev"
        }
        tempnumber = tempnumber + 1
    }
    tempnumber = 0
    while (tempnumber < savedpasswords.normalpasswords.length){
        if(pass == savedpasswords.normalpasswords[tempnumber]){
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
        window.open('https://file.io/LH7KvmOYouZT', '_blank');
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
}

returned = checkpassword(enteredpassword)

if (returned == "normal user") {
    loadlinks()
} else if (returned == "dev" {
    loadlinks()
    document.getElementById('sch').text = "Developer Mode Loaded."
}
else {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
    window.alert("Incorrect Password!")
}
