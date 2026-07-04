// ============================
// Dark Mode
// ============================

function darkMode() {
    document.body.classList.toggle("dark");
}


// ============================
// Tombol Order
// ============================

function pesan() {
    alert("☕ Terima kasih!\nPesanan Anda berhasil diterima.");
}


// ============================
// Validasi Form Contact
// ============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let nama = form.querySelector("input[type='text']").value;
    let email = form.querySelector("input[type='email']").value;
    let pesan = form.querySelector("textarea").value;

    if(nama=="" || email=="" || pesan==""){

        alert("Semua data harus diisi!");

        return;
    }

    alert(
        "Terima kasih, "+nama+
        "!\nPesan Anda berhasil dikirim."
    );

    form.reset();

});


// ============================
// Efek Muncul Saat Scroll
// ============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        const posisi = section.getBoundingClientRect().top;

        if(posisi < window.innerHeight-120){

            section.style.opacity="1";
            section.style.transform="translateY(0px)";

        }

    });

});


// ============================
// Animasi Awal
// ============================

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(50px)";

    section.style.transition="all .8s";

});


// Hero tetap muncul

document.querySelector(".hero").style.opacity="1";
document.querySelector(".hero").style.transform="translateY(0px)";


// ============================
// Jam Digital
// ============================

const jam = document.createElement("div");

jam.style.position="fixed";
jam.style.bottom="20px";
jam.style.right="20px";
jam.style.background="#6F4E37";
jam.style.color="white";
jam.style.padding="10px 15px";
jam.style.borderRadius="10px";
jam.style.fontWeight="bold";

document.body.appendChild(jam);

setInterval(()=>{

    let sekarang = new Date();

    jam.innerHTML=sekarang.toLocaleTimeString();

},1000);