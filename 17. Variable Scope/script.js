// scope adalah bagaimana variabel bisa diakses dalam program

// block scope vs function scope

// javascript menggunakan konsep function scope
// variabel yg dideklarasikan dalam function tidak dapat digunakan dari luar function 


// global scope / window scope
var a = 1; 

// contoh kasus

// 1.
// function tes() {
//     var a = 2;
//     console.log(window.a);
// }

// tes();

// 2.
function tes() {
    a = 2;
}
// contoh seperti diatas akan menyebabkan a dalam function menjadi variabel global karena js otomatis mendeklarasikannya sebab tidak ada var baik dalam maupun luar function
tes()
console.log(a);