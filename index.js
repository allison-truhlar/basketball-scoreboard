let homeScore = 0
document.getElementById("home-scr").textContent = homeScore

let guestScore = 0
document.getElementById("guest-scr").textContent = guestScore

function addOneHome(){
    homeScore += 1
    document.getElementById("home-scr").textContent = homeScore
}

function addTwoHome(){
    homeScore += 2
    document.getElementById("home-scr").textContent = homeScore
}

function addThreeHome(){
    homeScore += 3
    document.getElementById("home-scr").textContent = homeScore
}

function addOneGuest(){
    guestScore += 1
    document.getElementById("guest-scr").textContent = guestScore
}

function addTwoGuest(){
    guestScore += 2
    document.getElementById("guest-scr").textContent = guestScore
}

function addThreeGuest(){
    guestScore += 3
    document.getElementById("guest-scr").textContent = guestScore
}

function newGame(){
    homeScore = 0
    document.getElementById("home-scr").textContent = homeScore
    guestScore = 0
    document.getElementById("guest-scr").textContent = guestScore
}
