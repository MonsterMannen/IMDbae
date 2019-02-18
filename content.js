var date = document.querySelector('div[id="name-born-info"] > time').innerText;

var d = new Date();
var age = d.getFullYear() - date.slice(-5); // slice to get last 4
age--;  // assume they haven't had birthday yet

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var actorM = date.split(" ")[0];
var actorMNr = months.indexOf(actorM);
var actorD = date.split(" ")[1].slice(0, -1);  // remove comma at end

// add 1 year if they've had birthday
if(d.getMonth() > actorMNr){
    age++;
}else if(d.getMonth() == actorMNr && d.getDate() >= actorD){
    age++;
}

// #################################################################

if(!document.getElementById("name-death-info")){    // chech if actor alive
    var x = document.getElementById("name-born-info");
    var child = x.childNodes[4];
    
    // only add "in" for people with a birth location
    if(x.childNodes.length > 5){
        child.nodeValue = "(age " + age + ") in ";
    }else{
        child.nodeValue = "(age " + age + ")";
    }
}
