// liczbaPierwszaWorker.js
function czyLiczbaPierwsza(liczba) {
    if (liczba <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(liczba); i++) {
        if (liczba % i === 0) {
            return false;
        }
    }

    return true;
}

self.onmessage = function (e) {
    const liczbaDoSprawdzenia = e.data;

    const wynik = czyLiczbaPierwsza(liczbaDoSprawdzenia);

    postMessage({ result: wynik, progress: 100 });
};
