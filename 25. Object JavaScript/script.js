// membuat object

var mhs = {
    nama : "Ucup Surucup",
    umur : 19,
    ips : [3.00, 3.14, 3.25, 3.31],
    alamat : {
        jalan : "Jl. Karimata no 123",
        kota : "Bandung",
        provinsi : "Jawa Barat",
    },
};

console.log(mhs.ips[2]);
console.log(mhs["ips"][2]);
console.log(mhs.alamat.kota);
console.log(mhs["alamat"]["provinsi"]);

