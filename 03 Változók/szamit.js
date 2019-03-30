var a = +prompt("a oldal:","");         //számként kezeli kikényszerítéssel
var b = Number(prompt("b oldal:",""));  //számként kezeli js funkcióval
var ker = (2 * ( a + b )).toFixed(2);   // 2 tizedest ír ki
var ter = Math.round(a * b);            // egész számra kerekít  

document.getElementById("kerulet").innerHTML = "Kerület: " + ker + " m";
document.getElementById("terulet").innerHTML = "Terület: " + ter + " m2";
