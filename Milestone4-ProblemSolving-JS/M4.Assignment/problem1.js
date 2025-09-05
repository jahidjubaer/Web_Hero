function totalFine(fare) {
        if(typeof fare !== "number" || fare <= 0) return 'Invalid';
        const fine = fare + (20 / 100 * fare) + 30;
        return fine;
}

console.log(totalFine(552));
