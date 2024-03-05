

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist 

// dann gib aus "Erste Zahl klein, zweite kein 50iger" 


let randomNumber = Math.random() * 100;
let numberrandom = Math.floor(randomNumber);

console.log(numberrandom)

randomNumber = Math.random() * 100;
numberrandom2 = Math.floor(randomNumber);

console.log(numberrandom2)


if (numberrandom < numberrandom2 && numberrandom < 50){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")
} 
else if (numberrandom < 30 || numberrandom2 < 30){
    console.log("Eine der beiden ist kleiner als 30")
}
else if (numberrandom < 50 && numberrandom2 != 50){
    console.log("Erste Zahl klein, zweite kein 50iger")
}
 