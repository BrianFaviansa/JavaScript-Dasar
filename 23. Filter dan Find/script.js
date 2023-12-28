// filter dan find untuk mencari elemen dalam array
// find mengembalikan 1 nilai sedangkan filter bisa mengembalikan banyak nilai

// filter
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.filter(function (e) {
    return e > 5;
});
console.log(angka2);

// find
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.find(function (e) {
    return e > 5;
});
console.log(angka2);