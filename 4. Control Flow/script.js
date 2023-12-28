// pengulangan dan pengkondisian yg akan mengatur flow / alur dari program kita

/* perulangan
1. for
2. while
3. do while

*/

// alert('mulai')
// for (var i = 0; i < 3; i++) {
//     alert('halo dunia')
// }
// alert('selesai')

// pengkondisian / percabangan

/*
1. if
2. if .... else
3. if .... else if ..... else
4. switch
*/

// program sederhana seleksi ganjil genap 
var lagi = true;
while (lagi) {
    var angka = prompt('masukkan angka');

    if (angka % 2 === 0) {
        alert(`angka ${angka} adalah bilangan genap`);
    } else {
        alert(`angka ${angka} adalah bilangan ganjil`);
    }

    lagi = confirm('apakah ingin mencoba lagi?');
}
alert('terima kasih');



