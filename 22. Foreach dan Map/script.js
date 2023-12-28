// foreach 

var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var nama = ["Ucup", "Surucup", "Otong"]
// 1
// angka.forEach(function (e) {
//     console.log(e);
// });

// 2.
// var cetak = function(e) {
//     console.log(e);
// }
// angka.forEach(cetak);

// nama.forEach(function (e, i) {
//     console.log(`Mahasiswa ke ${i+1} adalah ${e}`)
// });

// map

var angka = [1, 2, 5, 3, 6, 8, 4];

// var angka2 = angka.map(function (e) {
    //     return e*2;
    // });
    // console.log(angka2.join(" - "));
    
    
// sort
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
console.log(angka.sort())
// cara diatas hanya mengurutkan angka terdepan, solusinya berikut :

angka.sort(function (a,b) {
    return a-b;
});
console.log(angka);
    
    
    






















