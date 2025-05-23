let a = Math.floor(Math.random() * 100) + 1; // nombre aléatoire entre 1 et 100

for (let i = 0; i <= a; i++) {
    if (i % 2 === 0) {
        process.stdout.write(i + " ");
    }
}
