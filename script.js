// Javascript untuk form login dan signup

const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signUpBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

// Inheritance

class Pendaftar {
    constructor(nama, umur){
        this.nama = nama
        this.umur = umur
    }
    dataPendaftar(){
        console.log("Data pendaftar dengan nama: "+this.nama+" umur: "+this.umur+" berhasil mendaftar!")
    }
}

class Uang extends Pendaftar {
    constructor(nama, umur, uangSangu){
        super(nama, umur)
        this.uangSangu = uangSangu
    }
}

let dataPendaftar = [];

function daftarPeserta() {
    const nama = document.getElementById("name").value;
    const umur = document.getElementById("age").value;
    const uangSangu = document.getElementById("moneyAllowance").value;

    // Pengecekan input
    if(nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000){
        return alert ("Input tidak sesuai dengan kriteria!");
    }

    const pendaftarBaru = new Uang(nama, umur, uangSangu);
    dataPendaftar.push(pendaftarBaru);

    // Clear Form
    document.getElementById("signUpForm").reset();

    const data = updateTablePendaftar();
}

function updateTablePendaftar(){
    const tablePendaftar = document.getElementById("data_pendaftar");
    tablePendaftar.innerHTML = "";

    if(dataPendaftar.length === 0){
        return tablePendaftar.innerHTML = "<p>Tidak ada pendaftar.</p>";
    }

    let totalUangSangu = 0;
    let totalUmur = 0;

    dataPendaftar.forEach((pendaftar, index) => {
        totalUangSangu += parseInt(pendaftar.uangSangu);
        totalUmur += parseInt(pendaftar.umur);

        const row = document.createElement("div");
        row.innerHTML = this.pendaftar.nama+this.pendaftar.umur+this.pendaftar.uangSangu;
        tablePendaftar.appendChild(row);
    });

    const rerataUangSangu = totalUangSangu / dataPendaftar.length;
    const rerataUmur = totalUmur / dataPendaftar.length;

    const resume = document.createElement("p");
    resume.innerHTML = "Rata-rata pendaftar memiliki uang sangu sebesar Rp "+rerataUangSangu.toFixed(2)+
    "dengan rerata umur "+rerataUmur.toFixed(2);
    tablePendaftar.appendChild(resume);
}


