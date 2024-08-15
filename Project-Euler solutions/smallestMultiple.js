function leastCommonMultiple(toNumber) {
    let result = 1;
    for ( let i = 2; i <= toNumber; i++) {
        result = (result * i) / gcd(result, i);
    }
    return result;
}

function gcd(num1, num2) {
    if (num2 === 0) return num1;
    let remainder = num1 % num2;
    return gcd(num2, remainder);
}


console.log(leastCommonMultiple(20));