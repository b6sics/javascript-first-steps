// lámpa kapcsolása
function kapcsol(s) {
    document.getElementById("lampa").src = s;
}

document.getElementById("fel").onclick = function() {
    kapcsol("bulbon.gif");
};
document.getElementById("le").onclick = function() {
    kapcsol("bulboff.gif");
};

// betűméret
let meret = 12;
function nagyit(n) {
    meret += n;
    document.getElementById("szoveg").style.fontSize = meret + "px";
}
document.getElementById("nagyobb").onclick = function() {
    nagyit(1);
};
document.getElementById("kisebb").onclick = function() {
    nagyit(-1);
};

// háttér
function hatter(szin) {
    document.getElementById("holder").style.backgroundColor = szin;
}
function hatter1(szin) {
    document.getElementById("szoba").style.backgroundColor = szin;
}
document.getElementById("hatterbe").onclick = function() {
    hatter("#999");
    hatter1("#555");
};
document.getElementById("hatterki").onclick = function() {
    hatter("#fff");
    hatter1("#fff");
};

