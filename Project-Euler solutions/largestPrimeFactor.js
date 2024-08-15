function isPrime(n) { 
    if (n <= 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else if (n % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function largestPrimeFactor(n) {
    let factor = 2;
    while (factor <= Math.sqrt(n)) {
        if (n % factor === 0) {
            n = n / factor;
        } else {
            factor++;
        }
    }
    return n;
}


console.log(largestPrimeFactor(600851475143));



