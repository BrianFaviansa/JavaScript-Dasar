// this adalah keyword special yg didefinisikan setiap kali membuat function

// 1. function declaration 
function halo() {
    console.log(this);
    console.log("Halo");
}
halo()
// this mengembalikan object Global

// 2. object literal
var obj = {};
obj.halo = function() {
    console.log (this);
    console.log("Hallo");
}
obj.halo();
// this mengembalikan object yg bersangkutan



// 3. constructor 
function halo() {
    console.log(this);
    console.log('halo');
}

var obj1 = new halo();
// this mengembalikan tiap object yg baru dibuat






















