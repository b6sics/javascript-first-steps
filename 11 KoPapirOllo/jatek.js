var lepes = 0;
var jp=0, gp=0;

document.getElementById("ko").onclick = function(){
    lepes = "k";
    document.getElementById("jobbkep").src = "jobb_ko.gif";
    valasz();
}

document.getElementById("papir").onclick = function(){
    lepes = "p";
    document.getElementById("jobbkep").src = "jobb_papir.gif";
    valasz();
}

document.getElementById("ollo").onclick = function(){
    lepes = "o";
    document.getElementById("jobbkep").src = "jobb_ollo.gif";
    valasz();
}

function valasz(){
    var v = Math.floor(Math.random()*3);
    if (v == 0) {
        lepes += "k";
        document.getElementById("balkep").src = "bal_ko.gif";
    }
    else if (v == 1) {
        lepes += "p";
        document.getElementById("balkep").src = "bal_papir.gif";
    } 
    else if(v == 2) {
        lepes += "o";
        document.getElementById("balkep").src = "bal_ollo.gif";
    }

    if(lepes=="op" || lepes=="pk" || lepes=="ko"){
        document.getElementById("uzenet").innerHTML = "Nyertél!";
        jp += 1;
        document.getElementById("jatekos").innerHTML = jp;
    }
    else if(lepes=="oo" || lepes=="pp" || lepes=="kk"){
        document.getElementById("uzenet").innerHTML = "Döntetlen!";
    }
    else{
        document.getElementById("uzenet").innerHTML = "Vesztettél!";
        gp += 1;
        document.getElementById("gep").innerHTML = gp;
    }
}
