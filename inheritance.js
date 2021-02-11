// Membahas Inheritance

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
        console.log(this.username + ' Telah bergabung pada perusahaan Startup Kami, di bagian ' + this.bagian_posisi);
    }

    hitungPegawai(){
        console.log('Tersedia 100-200 Pegawai');
    }

}

// let tambahPegawai = new pegawai('ivan', '123', 'Full-Stack Developer');
// tambahPegawai.gabung();

class Magang extends pegawai {
    constructor(username, posisi) {
        super(username);
        this.posisi = posisi;
    }

    gabungPosisi() {
        console.log('Hy ' + this.username + ' telah bergabung pegawai di posisi ' + this.posisi);
    }

}

let tambahMagang = new Magang('Martin', 'UX design');
tambahMagang.gabungPosisi();