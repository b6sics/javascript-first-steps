
function szamol(){
    var a = Number(document.getElementById("a_oldal").value);
    var b = Number(document.getElementById("b_oldal").value);

    var ker = (2 * ( a + b )).toFixed(2);
    var ter = (a * b).toFixed(2);

    document.getElementById("kerulet").innerHTML = "Kerület: " + ker + " m";
    document.getElementById("terulet").innerHTML = "Terület: " + ter + " m2"; 
}

document.getElementById("gomb").onclick = szamol;
