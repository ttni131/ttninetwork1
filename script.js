// URL'de başarı mesajı varsa portalı aç
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('status') === 'success') {
        hideAuth();
    }
}

function hideAuth() {
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('main-portal').style.display = 'block';
}

function showSection(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function copyIp() {
    navigator.clipboard.writeText("play.mardiummc.com");
    const n = document.getElementById('notif');
    n.classList.add('show');
    setTimeout(() => n.classList.remove('show'), 2000);
}

// Kar Efekti
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
