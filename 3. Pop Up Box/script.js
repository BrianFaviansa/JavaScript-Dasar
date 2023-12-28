// pop up box / dialog box adalah window kecil pd browser yg dapat kita munculkan agar user dapat berinteraksi / berdialog dengan web

/*
1. alert
2. prompt
3. confirm

prompt dan confirm mengembalikan nilai
prompt sesuai inputan
confirm mengembalikan boolean
*/

// alert('Hello World')
// alert('nama saya')
// alert('Brian Faviansa')

// var nama = prompt('masukkan nama : ')
// alert('Selamat Datang ' + nama)

// var tes = confirm('kamu yakin?')

// if (tes === true) {
//     alert('user menekan OK')
// } else {
//     alert('user menekan cancel')
// }

// alert('Pilihan anda adalah ' + tes)
// bisa dilakukan kondisi ketika menekan yes atau cancel



alert('selamat datang');
var lagi = true;

while (lagi) {
    var nama = prompt('masukkan nama :')
    alert('halo ' + nama)

    lagi = confirm('coba lagi?')
}

alert('terima kasih')