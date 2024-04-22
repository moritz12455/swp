function primeFactors(n) {
    const factors = [];
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n /= divisor;
        } else {
            divisor++;
        }
    }
    
    return factors;
}

const number = 2574874531279;
const factors = primeFactors(number);

if (factors.length === 2) {
    console.log(`Die beiden Primzahlen, die multipliziert werden müssen, um ${number} zu erhalten, sind ${factors[0]} und ${factors[1]}.`);
} else {
    console.log(`${number} kann nicht in genau zwei Primzahlen zerlegt werden.`);
}
