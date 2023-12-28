// refactoring adalah sebuah proses mengubah kode menjadi lebih 'baik' tanpa mengubah fungsionalitasnya

// faktor refactoring
// 1. readability
// 2. DRY (Dont't Repeat Yourself)
// 3. Testability 
// 4. Performance 
// 5. Maintainability

// refactoring sederhana

function jumlahVolumeDuaKubus(a, b) {
    return a**3 + b**3;
}

console.log(jumlahVolumeDuaKubus(2,3));