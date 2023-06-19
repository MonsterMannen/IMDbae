// IMDBae
// adding actors and actresses age besides their born date on imdb.com/name/*

log("Extension loaded")

if(isActorAlive()) {
    var bornClasses = document.querySelectorAll(".sc-dec7a8b-1")

    if(bornClasses) {
        bornClasses.forEach(function(c) {
            bornDateText = c.children[1].innerHTML
            age = calcAge(bornDateText)
            log("born: " + bornDateText + " | " + "age: " + age)
            c.children[1].innerHTML = c.children[1].innerHTML + ` (age ${age})`
        })

        log("html updated with age :)")
    }
}

function isActorAlive() {
    var actorAlive = false
    var deadDivs = document.querySelectorAll(".sc-dec7a8b-1")

    if(deadDivs) {
        actorAlive = deadDivs.length <= 2
    }
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
