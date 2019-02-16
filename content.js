var inner = document.body.innerText;

// get date part from all of the text on the page
var pos = inner.indexOf("Born: ");
var date = inner.substring(pos + 6);
pos = date.indexOf("in");
date = date.substring(0, pos);
console.log(date);

var d = new Date();
var age = d.getFullYear() - date.slice(-5); // slice to get last 4
age--;  // assume they haven't had birthday yet

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var actorM = date.split(" ")[0];
var actorMNr = months.indexOf(actorM);
var actorD = date.split(" ")[1].slice(0, -1);  // remove comma at end

// add 1 year if they've had birthday
if(d.getMonth() >= actorMNr){
    if(d.getDate() >= actorD){
        age++;
    }
}

console.log(age);

// #################################################################

var temp = inner.substring(0, pos) + "(" + age + " age)";
temp += inner.substring(pos);


var x = document.getElementById("name-born-info");
var child = x.childNodes[4];

child.nodeValue = "(age " + age + ") in ";
