<?php
// Veritabanı Bilgileri (db.php olarak da ayırabilirsin)
$host = "localhost";
$user = "root"; 
$pass = ""; 
$db   = "mardiummc"; 

$baglan = @new mysqli($host, $user, $pass, $db);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kayıt Ol Butonuna Basıldıysa
    if (isset($_POST['kayit_ol'])) {
        if ($baglan->connect_error) {
            die("Şu an kayıt yapılamıyor, lütfen sonra tekrar deneyin.");
        }
        $sifreli_pass = password_hash($password, PASSWORD_BCRYPT);
        $ekle = "INSERT INTO authme (username, password) VALUES ('$username', '$sifreli_pass')";
        
        if ($baglan->query($ekle) === TRUE) {
            echo "Kayıt Başarılı! <a href='index.php'>Geri Dön ve Giriş Yap</a>";
        } else {
            echo "Hata: Kullanıcı adı zaten alınmış olabilir.";
        }
    } 
    
    // Giriş Yap Butonuna Basıldıysa
    else if (isset($_POST['giris_yap'])) {
        // Burada basit bir simülasyon yapıyoruz, 
        // Gerçek sistemde veritabanından şifre kontrolü yapılmalıdır.
        header("Location: index.php?status=success");
        exit();
    }
} else {
    echo "Bu sayfaya doğrudan erişim yasaktır.";
}
?>
