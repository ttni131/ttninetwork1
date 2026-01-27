// Sayfa Geçişleri
function showPage(pageId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// IP Kopyalama
function copyIp() {
    navigator.clipboard.writeText("play.mardiummc.com");
    let t = document.getElementById("toast");
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2000);
}

// Canlı Kar Efekti
function createSnow() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    document.getElementById('snow').appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 5000);
}
setInterval(createSnow, 100);
