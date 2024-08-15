function sumOfMultiples(n, sum = 0) {
    while (n > 0) {
        if (n % 3 === 0) {
            sum += n;
        } else if (n % 5 === 0) {
            sum += n;
        }
        return sumOfMultiples(n - 1, sum);
    }
    return sum;
}

console.log(sumOfMultiples(999));

//  3 + 5 + 6 + 9 = 8 + 15 = 23s