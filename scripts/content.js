log("Extension loaded")

const bornClasses = document.querySelector(".sc-dec7a8b-1");
var childNodes = bornClasses.querySelectorAll(":scope > .sc-dec7a8b-2");
bornDateText = childNodes[1].innerHTML
log("born: " + bornDateText)

age = calcAge(bornDateText)
log("age: " + age)

// TODO insert age into html


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
