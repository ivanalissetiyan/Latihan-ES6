// Membahas Classes

// Ambil element
const skills_holder = document.getElementById('data');


// ES5



// ES6
// Modul untuk pegawai kantor
class pegawai {
    constructor(username, password, bagian_posisi) {
        this.username = username;
        this.password = password;
        this.bagian_posisi = bagian_posisi;
    }

    gabung(){
        console.log(this.username + ' Telah bergabung pada perusahaan Startup Kami, di bagian ' + this.bagian_posisi)
    }


}

let tambahPegawai = new pegawai('ivan', '123', 'Full-Stack Developer');
tambahPegawai.gabung();