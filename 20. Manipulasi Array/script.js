// manipulasi array

// 1. menambah isi array
// var arr = [];
// arr[0] = "Ucup";
// arr[1] = "Asep";
// console.log(arr);


// 2. menghapus isi array
// var arr = ["ucup", "asep", "otong"];
// arr[1] = undefined;

// 3. menampilkan isi array 
// var arr = ["ucup", "asep", "otong"];

// for ( var i = 0; i < arr.length; i++) {
//     console.log(`mahasiswa ke ${i+1} : ${arr[i]}`)
// }

// 4. method pada array 

// a. join
// var arr = ["Brian", "Faviansa", "Putra", "Diasti"];
// console.log(arr.join(" "));

// b. push dan pop
// var arr = ["ucup", "asep", "otong"];
// arr.push("Jani");
// console.log(arr);
// arr.push("Jajang", "Tatang");
// console.log(arr);
// arr.pop();
// console.log(arr);

// c. unshift dan shift  
var arr = ["ucup", "asep", "otong"];
arr.unshift("Jamil");
console.log(arr);
arr.shift();
console.log(arr);
