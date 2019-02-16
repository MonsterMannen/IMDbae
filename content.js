var date = document.querySelector('div[id="name-born-info"] > time').innerText;
// console.log(date);

var d = new Date();
var age = d.getFullYear() - date.slice(-5); // slice to get last 4
age--;  // assume they haven't had birthday yet

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var actorM = date.split(" ")[0];
var actorMNr = months.indexOf(date.split(" ")[0]);
var actorD = date.split(" ")[1].slice(0, -1);  // remove comma at end

// add 1 year if they've had birthday
if (d.getMonth() >= actorMNr && d.getDate() >= actorD) age++;

// console.log(age);

// #################################################################
// change site text
if (!document.getElementById("name-death-info")) { // chech if actor alive

  var x = document.getElementById("name-born-info");
  var child = x.childNodes[4];

  child.nodeValue = "(age " + age + ") in ";
}
