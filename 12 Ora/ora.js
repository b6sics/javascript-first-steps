/* 
function udvozlet(){
    alert("Késleltetett üdvözlet")
}

setTimeout(udvozlet,3000);


function csillag(){
    document.getElementById("kiir").innerHTML += "*";
}
 */

var elinditva = false;

function ora(){
    document.getElementById("kiir").innerHTML = new Date().toLocaleTimeString();
}
var idozito;

document.getElementById("start").onclick = function(){
    if(!elinditva){
        idozito = setInterval(ora,500);
        elinditva = true;   
    }
}

document.getElementById("stop").onclick = function(){
    clearInterval(idozito);
    elinditva = false;
}

ora();