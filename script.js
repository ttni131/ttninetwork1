// Sayfa Değiştirme Sistemi
function showPage(pageId) {
    // Tüm içerikleri gizle
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // İstenen içeriği göster
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
    }
}

// IP Kopyalama Fonksiyonu
function copyIp() {
    const ip = "play.mardiummc.com";
    navigator.clipboard.writeText(ip).then(() => {
        const toast = document.getElementById("toast");
        toast.className = "show";
        setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 2500);
    });
}

// Canlı Kar Yağdırma Efekti
function createSnowflake() {
    const snowContainer = document.getElementById('snow');
    const snowflake = document.createElement('div');
    
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    
    // Rastgele değerler
    const startX = Math.random() * 100; // Ekranın neresinden başlayacak
    const duration = Math.random() * 3 + 2; // Düşüş hızı
    const opacity = Math.random();
    const size = Math.random() * 10 + 10;

    snowflake.style.left = startX + 'vw';
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.opacity = opacity;
    snowflake.style.fontSize = size + 'px';
    
    snowContainer.appendChild(snowflake);
    
    // Kar tanesi düştükten sonra temizle
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// Kar yağışını başlat (Sıklığı 150ms)
setInterval(createSnowflake, 150);
