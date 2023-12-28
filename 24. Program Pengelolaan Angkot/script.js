var penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for ( var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if ( penumpang[i] == undefined ) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
            
            // jika sudah ada nama yg sama
            else if ( penumpang[i] == namaPenumpang ) {
                // tampilkan pesan kesalahannya
                console.log(`nama penumpang ${namaPenumpang} sudah ada di dalam angkot`)
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
                
            // jika seluruh kursi terisi
            else if ( i == penumpang.length -1 ) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if ( penumpang.length == 0 ) {
        // tampilkan pesan bahwa angkot kosong
        // tidak mungkin ada penumpang turun
        console.log("angkot masih kosong")
        // kembalikan isi arayy & keluar dari function
        return penumpang;
    }
    else {
        // telusuri seluruh kursi dari awal 
        for ( var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang sesuai
            if ( penumpang[i] == namaPenumpang) {
                // hapus penumpang dengan mengubah namanya menjadi undefined
                penumpang[i] == undefined;
                // kembalikan isi arayy & keluar dari function
                return penumpang;
            } else {
            // jika tidak ada nama yg sesuai
                // tampilkan pesan kesalahannya
                console.log(`penumpang dengan nama ${namaPenumpang} tidak ada di dalam angkot`)
                // kembalikan isi arayy & keluar dari function\
                return penumpang;
            }
        }
    }
}






























