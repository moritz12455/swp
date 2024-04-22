let a = ['hallo', 'test', 'fortnite'];
// immer von 0 zählen
// 0, 1, 2, ...

// console.log(a[0])
// arrays ausgeben variablename[nummer]
// bsp: a[0]

// bei array hinzufügen
// mit Push wird Array von
// let a = ['hallo', 'test', 'fortnite'];
// a.push("servus")
// zu -->  ['hallo', 'test', 'fortnite', 'servus'];

// großbuchstaben herauslesen mit ascii code
let input = "AbCdEfGasdasdAVBCDdsiuasdeeztEUZCD";
let buchstaben = input.split("");
let result = "";

for (let i = 0; i<buchstaben.length; i++) {
    if (buchstaben[i].charCodeAt(0) >= 65 && buchstaben[i].charCodeAt(0) <= 90) {
        result += buchstaben[i];
    }
}

console.log(result);

// Array to String
let zahlen = ['eins', 'zwei', 'drei', 'vier'];
console.log(zahlen.toString());

// String to Array
let string = "Hallo ich heiße Simon";
console.log(string.split(" "));

// Array to String (aber mit for Schleife)
result = "";
for (let i = 0; i<zahlen.length; i++) {
    result += zahlen[i];
}
console.log(result);

// Array umdrehen
let zahl = ['eins', 'zwei', 'drei', 'vier'];
console.log(zahl.reverse());

// Arrays könnte man auch umdrehen mit for (dafür einfach i = arr.length, i-- und so weiter)

// Min
let zahlen2 = [24, 100, 50, 26, 15, 12, 18]
let min = Math.min(...zahlen2);
// Bei einer Array muss man die drei Punkte davorschreiben
console.log(min);

// Max
let zahlen3 = [24, 100, 50, 26, 15, 12, 18, 121]
let max = Math.max(...zahlen3);
console.log(max);

// Durchschnitt (avg)
let zahlen4 = [24, 100, 50, 26, 15, 12, 18, 121]
let sum = 0;
for (let i = 0; i<zahlen4.length; i++) {
    sum += zahlen4[i];
}

let average = sum / zahlen4.length;
console.log(average);

// Testfrage
let botschaft = "15:16:17";

// Splitten in die 3 Bestandteile (HH MM SS)
let time = botschaft.split(":");
let hours = time[0];
let minutes = time[1];
let seconds = time[2];

console.log(`Aktuell ist ${hours} es Uhr, es sind bereits ${minutes} Minuten und ${seconds} Sekunden vergangen!`)