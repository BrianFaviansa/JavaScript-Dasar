// object literal
var mhs = {
    nama : "Ucup Surucup",
    nim : "222410101001",
    email : "usrucup@gmail.com",
    prodi : "Teknik Informatika"
};

console.log(mhs);

// function declaration
function buatObjectMhs(nama, nim, email, prodi) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.prodi = prodi;
    return mhs;
};

var mhs3 = buatObjectMhs("Otong Surotong", "222410101002", "osrotong@gmail.com", "Teknik Informatika");
var mhs4 = buatObjectMhs("Tatang Sutatang", "222410101003", "osrotong@gmail.com", "Teknik Informatika");

console.log(mhs3)
console.log(mhs4)

// constructor (keyword new)
function Mahasiswa(nama, nim, email, prodi) {
    this.nama = nama;
    this. nim = nim;
    this.email = email;
    this.prodi = prodi;
}

var mhs5 = new Mahasiswa("Jojon Sujojon", "222410101004", "josjojon@gmail.com", "Tenik Informatika");

console.log(mhs5)








// object.create()

