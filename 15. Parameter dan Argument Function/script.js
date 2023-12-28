// parameter adalah variabel yg ditulis di dalam kurung pada saat function dibuat / dideklarasikan, digunakan untuk menampung nilai yg dikirimkan saat function dipanggil
// argument adalah nilai yg dikirimkan ke parameter saat function dipanggil

// function tambah(a, b) {
//     return a + b;
// }

// function kali(a, b) {
//     return a * b;
// }

// var hasil = kali(tambah(1,2), tambah(3,2));
// console.log(hasil);

// var a = parseInt(prompt('masukkan nilai pertama'));
// var b = parseInt(prompt('masukkan nilai kedua'));
// var hasil = tambah(a, b);
// alert(`hasil jumlah dari ${a} + ${b} adalah ${hasil}`); 

// jika parameter < argumen maka argumen yg berlebih akan diabaikan
// jika parameter > argumen maka parameter diberi nilai default yaitu undefined

// arguments -> array yg berisi nilai yg dikirimkan saat fungsi dipanggil / pseudo-variabel

// function tambah() {
//     return arguments;
// }

// var coba = tambah(5, 10, 'hai', 20, false, 0.5)
// console.log(coba)

// menggunakan array untuk argument

function tambah() {
    var hasil = 0;

    for (i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3,4,5)

console.log(coba)