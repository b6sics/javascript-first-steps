function szamol(){
    var r = +document.getElementById("sugar").value;
    var m = +document.getElementById("magas").value;

    var A = 2 * r * Math.PI * (r + m);
    var V = r * r * Math.PI * m;

    document.getElementById("felszin").innerHTML = "Felszín:  " + A.toFixed(3);
    document.getElementById("terfogat").innerHTML = "Térfogat:  " + V.toFixed(3);
}

function szamol2(){
    
   var b1 = +document.getElementById("a").value;
   var b2 = +document.getElementById("b").value;

   var c = Math.sqrt(b1 * b1 + b2 * b2);

    document.getElementById("pitagorasz_c").innerHTML = "Átfogó:  " + c.toFixed(2);
}

document.getElementById("gomb").onclick = szamol;
document.getElementById("gomb2").onclick = szamol2;

