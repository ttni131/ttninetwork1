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

function createSnow() {
    const snow = document.getElementById('snow');
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snow.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 5000);
}
setInterval(createSnow, 100);
