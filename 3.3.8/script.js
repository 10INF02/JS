function dejMi1() {
   return 1
}

console.log(dejMi1 ())

//funkce s logem
function nasobic(a,b) {
    console,log(a*b);
}

let r = nasobic(5,3)
console.log(r)

//funkce s return

function nasobic2(a,b) {
    return(a*b)
}

let r2 = nasobic2(5,3)
console.log(r2)

//return ukončí funkci

function konec() {
    console.log("A");
    return "Hotovo";
    console.log("B"); //toto neprojde
}

let konec = konec();
console.log(konec2())

//cvičení

function jeSude(cislo){
    return % 2 === 0
}
console.log(jeSude(20)); true
console.log(jeSude(7)); false