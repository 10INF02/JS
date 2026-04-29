let totalPrice = 300;
 
if (totalPrice >= 100) {
    let discountedPrice = 0.7*totalPrice;
    console.log("Získali jste slevu! Nová cena: " + discountedPrice + "Kč")
} else {
    let rest = 100 - totalPrice
    console.log("Utraťte ještě " + rest + "Kč a získejte slevu 30%!")
}