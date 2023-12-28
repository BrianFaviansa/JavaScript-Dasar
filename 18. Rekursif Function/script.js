// sebuah fungsi yg memanggil dirinya sendiri

function tampilkanAngka(n) {
    if (n === 0) return;

    console.log(n)
    return tampilkanAngka(n-1)
}

tampilkanAngka(10)

function faktorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * faktorial(n-1)
}

console.log(faktorial(5))

// semua looping bisa dibuat rekursif, tapi tidak sebaliknya