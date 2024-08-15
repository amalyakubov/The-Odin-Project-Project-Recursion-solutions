function largestPalindromicNumberFromTwoThreeDigitNumbers() {
    console.time('dbsSave');
    for (let i = 999; i > 0; i--) {
        for (let j = 999; j > 0; j--) {
            let product = i * j;
            if (product.toString() === product.toString().split('').reverse().join('')) {
                console.timeEnd('dbsSave');
                return product;
            }
        }
    }
}

console.log(largestPalindromicNumberFromTwoThreeDigitNumbers());

