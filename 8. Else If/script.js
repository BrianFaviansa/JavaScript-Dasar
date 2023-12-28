var jmlAngkot = 10;
var angkotBeroperasi = 5;
var noAngkot =1;


for ( noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
    } else if (noAngkot === 8) {
        console.log(`Angkot No. ${noAngkot} sedang lembur`);
    } else {
        console.log(`Agnkot No. ${noAngkot} sedang tidak beroperasi`);
    }
} 