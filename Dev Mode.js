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


if (window.prompt("Enter Password: ","") == "5476") {
    loadlinks()
} else {
  window.location.replace("https://jj123llol.github.io/school-site/index.html")
}
