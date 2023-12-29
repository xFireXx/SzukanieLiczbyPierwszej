let numPrimes;
let primes = [];

onmessage = function (e) {
    numPrimes = e.data;
    primes = [];
    calculatePrimes();
};

function calculatePrimes() {
    let x = 0;
    let count = 0;
    let lastProgress = -1;

    do {
        if (isPrime(x)) {
            count++;
            primes.push(x);

            let progress = Math.floor((count / numPrimes) * 100);

        if (progress !== lastProgress) {
            postMessage({ result: primes, progress });
            lastProgress = progress;
        }
        }

        x++;
    } while (count < numPrimes);

  postMessage({ result: primes, progress: 100 });
}

function isPrime(x) {
    if (x < 2) {
        return false;
    }

    if (x == 2) {
        return true;
    }

    let sqrt = Math.sqrt(x);
    for (let div = 2; div <= sqrt; div++) {
        if (x % div == 0) {
        return false;
        }
    }

    return true;
}
