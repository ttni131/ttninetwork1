<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>MardiumMC | Portal</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div id="snow"></div>

    <div id="auth-screen" class="full-overlay">
        <div class="auth-box">
            <h1 class="logo">MARDIUM<span>MC</span></h1>
            <p>Maceraya katılmak için giriş yapın veya kayıt olun.</p>
            
            <form action="islem.php" method="POST" class="auth-form">
                <div class="input-group">
                    <i class="fas fa-user"></i>
                    <input type="text" name="username" placeholder="Minecraft Adın" required>
                </div>
                <div class="input-group">
                    <i class="fas fa-lock"></i>
                    <input type="password" name="password" placeholder="Şifren" required>
                </div>
                
                <div class="auth-buttons">
                    <button type="submit" name="giris_yap" class="btn-login">Giriş Yap</button>
                    <button type="submit" name="kayit_ol" class="btn-register">Kayıt Ol</button>
                </div>
            </form>
            <button class="skip-btn" onclick="hideAuth()">Sadece Siteye Göz At</button>
        </div>
    </div>

    <div id="main-portal" class="main-container" style="display:none;">
        <header>
            <h1 class="logo">MARDIUM<span>MC</span></h1>
            <nav>
                <button onclick="showSection('home')">Anasayfa</button>
                <button onclick="showSection('store')">Mağaza</button>
                <button onclick="showSection('vote')">Oy Ver</button>
            </nav>
        </header>

        <section id="home" class="page active">
            <div class="hero">
                <h2>Kış Dünyasına Hoş Geldin!</h2>
                <div class="info-card" onclick="copyIp()">
                    <p>IP: play.mardiummc.com</p>
                    <span>(Tıkla Kopyala)</span>
                </div>
            </div>
        </section>

        <section id="store" class="page">
            <h2>Mağaza</h2>
            <div class="grid">
                <div class="item-card">
                    <div class="price-tag">25 TL</div>
                    <h3>VIP</h3>
                    <a href="https://www.shopier.com/SİZİN_GERÇEK_LİNKİNİZ_1" target="_blank" class="buy-btn">Satın Al</a>
                </div>
                <div class="item-card">
                    <div class="price-tag">50 TL</div>
                    <h3>MVIP</h3>
                    <a href="https://www.shopier.com/SİZİN_GERÇEK_LİNKİNİZ_2" target="_blank" class="buy-btn">Satın Al</a>
                </div>
                <div class="item-card">
                    <div class="price-tag">70 TL</div>
                    <h3>KREDİ</h3>
                    <a href="https://www.shopier.com/SİZİN_GERÇEK_LİNKİNİZ_3" target="_blank" class="buy-btn">Satın Al</a>
                </div>
            </div>
        </section>

        <section id="vote" class="page">
            <h2>Oy Ver</h2>
            <a href="https://minecraft-mp.com/server-s353584" target="_blank" class="vote-btn">Minecraft-MP</a>
        </section>
    </div>

    <div id="notif">IP Kopyalandı! ❄️</div>
    <script src="script.js"></script>
</body>
</html>
