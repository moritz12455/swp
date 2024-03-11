


let letter = "x"

let output = ""
for (let index = 1; index < 100; index++) {
    output += letter;
    if (index % 4 == 0) {
        if (letter == "x") { 
            letter = "o" 
            console.log(output);
            output = ""
        } else {
            letter = "x"
            console.log(output);
            output = ""
        }
    }
   
}