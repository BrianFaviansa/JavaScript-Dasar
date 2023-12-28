/*  switch (ekspresi) {
    case "nilai 1":
        aksi1
        [break;]
    case "nilai 2":
        aksi2
        [break;]
    case "nilai n":
        aksi n
        [break;]
    default
        aksi default
        [break;]
}
*/

// var angka = parseInt(prompt('masukkan angka : '))

// switch (angka) {
//     case 1:
//         alert('anda memasukkan angka 1')
//         break
//     case 2:
//         alert('anda memasukkan angka 2')
//         break
//     case 3:
//         alert('anda memasukkan angka 3')
//     default:
//         alert('angka yg anda masukkan salah')
// }

var item = prompt('masukkan nama makanan atau minuman \ncontoh: nasi, daging, susu, hamburger, softdrink')

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan / minuman sehat')
        break;
    case 'hamburger':
    case 'softrink':
        alert('makanan / minuman tidak sehat')
        break;
    default:
        alert('makanan / minuman yg anda masukkan salah')
}