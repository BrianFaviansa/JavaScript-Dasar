// menangkap pilihan player
lagi = true;
while (lagi) {
    var p = prompt('pilih: gajah / semut / orang');

    // menangkap pilihan komputer
    // generate bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';

    // tentukan rules
    if ( p == comp) {
        hasil = 'SERI!'
    } else if ( p == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!'
    } else if ( p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!'
    } else  if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!'
    } else {
        hasil = 'pilihan anda salah!'
    }

    // tampilkan hasilnya
    alert(`pilihanmu ${p}\npilihan computer ${comp}\nhasilnya ${hasil}`)
    lagi = confirm('lagi?')
}
alert('terima kasih telah bermain suwit jawa')
