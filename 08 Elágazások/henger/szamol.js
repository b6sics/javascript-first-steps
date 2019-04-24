function szamol() {
    var r = +document.getElementById("sugar").value;
    var m = +document.getElementById("magas").value;

    if ( isNaN(r) || isNaN(m) || r <= 0 || m <= 0){
        alert ("Hibás adatok!");
        return;
    }

    var A = 2 * r * Math.PI * (r + m);
    var V = r * r * Math.PI * m;

    document.getElementById("felszin").innerHTML  = "Felszín:  " + A.toFixed(3);
    document.getElementById("terfogat").innerHTML = "Térfogat: " + V.toFixed(3);
}

document.getElementById("gomb").onclick = szamol;
