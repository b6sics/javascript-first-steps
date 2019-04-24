var t = new Date();
const nap = t.getDay();
const honap = t.getMonth();
var s, evszak;

switch(nap) {
    case 1:
    s = "hétfő";
    break;
    case 2:
    s = "kedd";
    break;
    case 3:
    s = "szerda";
    break;
    case 4:
    s = "csütörtök";
    break;
    case 5:
    s = "péntek";
    break;
    case 6:
    s = "szombat";
    break;
    case 0:
    s = "vasárnap";
    break;
    default:
    s = "valami nem stimmel...";
    break;
}

if (honap < 3 || honap > 11){
    evszak = "tél";
}else if(honap < 6){
    evszak = "tavasz";
}else if(honap < 9){
    evszak = "nyár";
}else{
    evszak = "ősz";
}

document.body.innerHTML = "<p> A mai " + evszak + "i dátum: " 
+ t.toLocaleDateString() + " (" + s + ")</p>";
document.body.innerHTML += "<p> A pontos idő: " 
+ t.toLocaleTimeString() + ".</p>";