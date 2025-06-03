// IMDBae
// adding actors and actresses age besides their born date on imdb.com/name/*

// UPDATE THIS IF IT BREAKS ----------------------------
QUERY_SELECT = '[data-testid="birth-and-death-section"]'
// -----------------------------------------------------

log("Extension loaded")

var birth_death_classes = document.querySelectorAll(QUERY_SELECT);
data_classes_mobile  = birth_death_classes[0].querySelectorAll('span')
data_classes_desktop = birth_death_classes[1].querySelectorAll('span')


if(isActorAlive()) {
    lastClass_mobile  = data_classes_mobile[data_classes_mobile.length - 1]
    lastClass_desktop = data_classes_desktop[data_classes_desktop.length - 1]

    bornDateText = lastClass_desktop.innerText
    age = calcAge(bornDateText)
    log("born: " + bornDateText + " | " + "age: " + age)

    lastClass_mobile.innerHTML = bornDateText + ` (age ${age})`
    lastClass_desktop.innerHTML = bornDateText + ` (age ${age})`
    log("html updated with age :)")
}


function isActorAlive() {
    var actorAlive = true

    data_classes_desktop.forEach(d => {
        if (d.innerText.toLowerCase().includes("died")) {
            actorAlive = false
        }
    })

    log("alive: " + actorAlive)
    return actorAlive
}


function calcAge(bornDate) {
    var currentDate = new Date()

    // if bornDate is just a year (ex "1994")
    if (/^\d{4}$/.test(bornDate.trim())) {
        return currentDate.getFullYear() - parseInt(bornDate);
    }

    // otherwise -> bornDate format: September 2, 1964

    var age = currentDate.getFullYear() - bornDate.split(",")[1].trim()
    // assume they haven't had birthday yet
    age--

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
