// IMDBae
// adding actors and actresses age besides their born date on imdb.com/name/*

var html_ID = ".sc-59a43f1c-2"

log("Extension loaded")

if(isActorAlive()) {
    var bornClasses = document.querySelectorAll(html_ID)
    lastClass = bornClasses[bornClasses.length - 1]

    bornDateText = lastClass.innerText
    age = calcAge(bornDateText)
    log("born: " + bornDateText + " | " + "age: " + age)
    lastClass.innerHTML = bornDateText + ` (age ${age})`
    log("html updated with age :)")
}

function isActorAlive() {
    var actorAlive = true
    var deadDivs = document.querySelectorAll(html_ID)

    deadDivs.forEach(d => {
        if (d.innerText.toLowerCase().includes("died")) {
            actorAlive = false
        }
    })

    log("alive: " + actorAlive)
    return actorAlive
}

function calcAge(bornDate) {
    // bornDate format: September 2, 1964

    var currentDate = new Date()

    var age = currentDate.getFullYear() - bornDate.split(",")[1].trim()
    age--  // assume they haven't had birthday yet

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var bornMonth = bornDate.split(" ")[0]
    var bornMonthIndex = months.indexOf(bornMonth)
    var bornDay = bornDate.split(",")[0].split(" ")[1]

    // add 1 year if they've had birthday
    if(currentDate.getMonth() > bornMonthIndex){
        age++
    } else if(currentDate.getMonth() == bornMonthIndex && currentDate.getDate() >= bornDay) {
        age++
    }

    return age
}

function log(text) {
    console.log("IMDbae: ", text)
}
