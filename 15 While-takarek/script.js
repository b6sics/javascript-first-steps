var kamat = 0.02/12 * 0.85;
var ft = 10000;
var cel = 1000000;

function szamol(){
    var osszeg=0, ho=0;
    while (osszeg < cel){
        osszeg += ft;
        osszeg += kamat * osszeg;
        ho++;
    }
    document.getElementById("meddig").innerHTML = ho;
    document.getElementById("mennyi").innerHTML = osszeg.toFixed(0);
}

szamol();

document.getElementById("betet").oninput = function() {
    ft = +this.value;
    document.getElementById("blabel").innerHTML = ft;
    szamol();
}

document.getElementById("cel").oninput = function() {
    cel = +this.value;
    document.getElementById("clabel").innerHTML = cel;
    szamol();
}