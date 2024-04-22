const data = "Hans geht heute schwimmen das ist gut";
// Drehe die Wörter um
// Output
// schwimmen heute geht Hans

wörter = data.split(" ");

let text =  ""
for (i = wörter.length - 1; i >= 0; i--) {
    text += wörter[i] + " ";
}
console.log(text);


//max
let zahlentext = "8,2,1,4,6,1,8,7"

let zahlen = zahlentext.split(",")
let max = Math.max(...zahlen);	
console.log(max );
// wie oft es vorkommt kann ich noch nicht 


const temperatures = "-1,5,51,-10,-11,2,90,-8,-44";

let temps = temperatures.split(",")
let sum = 0;
let count = 0;
for (let i = 0; i<temps.length; i++) {
    if( parseInt(temps [i]) < 50 && parseInt(temps [i]) [i] > -30){
    sum += parseInt(temps[i]);
    count++
}
}

let avg = sum / count;
console.log(avg);
//komme nicht drauf :(




