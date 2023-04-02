log("Extension loaded")

// check if actor/actress is alive
var deadDivs = document.querySelectorAll(".sc-dec7a8b-1")
actorAlive = deadDivs.length <= 2
log("alive: " + actorAlive)

if(actorAlive) {
    var bornClasses = document.querySelector(".sc-dec7a8b-1");
    var childNodes = bornClasses.querySelectorAll(":scope > .sc-dec7a8b-2");

    bornDateText = childNodes[1].innerHTML
    age = calcAge(bornDateText)
    log("born: " + bornDateText + " | " + "age: " + age)

    // small screens div age update
    childNodes[1].innerText = childNodes[1].innerText + ` (age ${age})`

    // big screens div age update
    bigScreenDate = document.querySelectorAll(".sc-99c6a4c3-1")[1];
    b = bigScreenDate.querySelector(".sc-dec7a8b-1");
    b = b.querySelectorAll(".sc-dec7a8b-2")[1];
    b.innerText = b.innerText + ` (age ${age})`

    log("html updated with age :)")
}

function calcAge(bornDate) {
    // bornDate format: September 2, 1964

    var currentDate = new Date();

    var age = currentDate.getFullYear() - bornDate.split(",")[1].trim();
    age--;  // assume they haven't had birthday yet

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var bornMonth = bornDate.split(" ")[0];
    var bornMonthIndex = months.indexOf(bornMonth);
    var bornDay = bornDate.split(",")[0].split(" ")[1];

    // add 1 year if they've had birthday
    if(currentDate.getMonth() > bornMonthIndex){
        age++;
    } else if(currentDate.getMonth() == bornMonthIndex && currentDate.getDate() >= bornDay) {
        age++;
    }

    return age;
}

function log(text) {
    console.log("IMDbae: ", text)
}
