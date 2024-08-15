function fib(n) {
    let a = [];
    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            a.push(i);
        } else {
            a.push(a[i - 1] + a[i - 2]);
        }
    }
    console.log(a);
    let sumOfEvenTerms = a.reduce(callbackFunction)
    return sumOfEvenTerms;
}

function callbackFunction(previousElement, currentElement) {
    if (currentElement % 2 === 0 && currentElement <= 4000000) {
        return previousElement + currentElement;
    }
    return previousElement;
}

console.log(fib(100));