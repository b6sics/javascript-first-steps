var mikor = new Date('2019-06-15T23:59').getTime();

function kiir() {
    var ido = mikor - new Date().getTime();
if (ido > 0){
        var nap = Math.floor(ido/(24*60*60*1000));
        var ora = Math.floor(ido/(60*60*1000) % 24);
        var perc = Math.floor(ido/(60*1000) % 60);
        var mp = Math.floor((ido/1000) % 60);
        document.getElementById("hatra").innerHTML =
            nap + " nap " + ora + " óra " + perc + " perc " + mp + " mp";
        setTimeout(kiir, 1000);
    }else{
 //       document.getElementById("hatra").innerHTML =
 //         "Az akció véget ért!";
    }
}

kiir();