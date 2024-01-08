let kleinerGleich12 = 0;
let groesserAls12 = 0;

for (let i = 0; i < 10; i++) {
    let zufallszahl = Math.floor(Math.random() * (15 - 5 + 1) + 5);
    
    if (zufallszahl > 12) {
        console.log(`Zufallszahl ${zufallszahl} ist größer als 12.`);
        groesserAls12++;
    } else {
        kleinerGleich12++;
    }
}

console.log(`\nAnzahl der Zahlen kleiner-gleich 12: ${kleinerGleich12}`);
console.log(`Anzahl der Zahlen größer als 12: ${groesserAls12}`);
