function szamol(){
    var magassag = +document.getElementById("magassag").value/100;
    var tomeg = +document.getElementById("tomeg").value;
    if (magassag<1 || tomeg<20) {
        alert("Hibás adatok!");
        return;
    }
    var tti = tomeg / magassag / magassag;
    var text = "erősen elhízott";
    if (tti < 20){
        text = "alultáplált";
    }else if (tti < 25){
        text = "normális";
    }else if (tti < 30){
        text = "túlsúlyos";
    }else if (tti < 35){
        text = "elhízott";
    }
    document.getElementById("kiiras").innerHTML = tti.toFixed(2) + "<br />" + text;
}

document.getElementById("gomb").onclick = szamol;

