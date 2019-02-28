var rawDate = document.querySelector('div[id="name-born-info"] > time');
if (rawDate) rawDate = rawDate.innerText;
// console.log(rawDate);

var birthDate = new Date(rawDate);
var dateNow = new Date();

var age = dateNow.getFullYear() - birthDate.getFullYear();

if (dateNow.getMonth() < birthDate.getMonth()
    || dateNow.getMonth() == birthDate.getMonth()
    && dateNow.getDate() < birthDate.getDate()) age--;
// console.log(age);

// #################################################################

if (!document.getElementById("name-death-info") && rawDate) {    // chech if actor alive
    var x = document.getElementById("name-born-info");
    var child = x.childNodes[4];

    // only add "in" for people with a birth location
    if (x.childNodes.length > 5) child.nodeValue = `(age ${age}) in `;
    else child.nodeValue = `(age ${age})`;
}
