
// 1. Kar Yağışı Efekti
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

let width, height, flakes;

function initSnow() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Kar tanesi sayısı (Mete, burayı artırıp azaltabilirsin)
    const numFlakes = 150; 
    flakes = [];

    for (let i = 0; i < numFlakes; i++) {
        flakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 4 + 1, // Tane boyutu
            d: Math.random() * 1 // Düşme hızı
        });
    }
}

function drawSnow() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    for (let i = 0; i < flakes.length; i++) {
        let f = flakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveSnow();
}

function moveSnow() {
    for (let i = 0; i < flakes.length; i++) {
        let f = flakes[i];
        f.y += Math.pow(f.d, 2) + 1; // Aşağı doğru hareket
        f.x += Math.sin(f.y / 50); // Hafif sağa sola sallanma

        // Ekrandan çıkarsa tepeden tekrar başlat
        if (f.y > height) {
            flakes[i] = { x: Math.random() * width, y: 0, r: f.r, d: f.d };
        }
    }
}

function runSnow() {
    drawSnow();
    requestAnimationFrame(runSnow);
}

// Ekran boyutu değişirse karı yeniden ayarla
window.addEventListener('resize', initSnow);

// Başlat
initSnow();
runSnow();


// 2. Popup (ttnibilgi) Mantığı
const modal = document.getElementById("infoModal");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Pencere dışına tıklayınca kapatma
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
