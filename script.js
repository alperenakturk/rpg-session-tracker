// Bu fonksiyon (işlev), HTML sayfasındaki butona tıklandığında çalışır.
function d20At() {
    
    // 1. Zar Atma (1'den 20'ye kadar rastgele bir tam sayı üretir)
    // Math.random() 0 ile 0.999... arasında sayı üretir.
    // Bunu 20 ile çarpıp, 1 ekleyerek 1-20 aralığına getiririz.
    let sonuc = Math.floor(Math.random() * 20) + 1; 

    // 2. Sonucu HTML'e Yazma
    let sonucAlani = document.getElementById("zar-sonucu");
    
    // Zar sonucunu sayfaya büyük bir şekilde yazar
    sonucAlani.innerHTML = `D20 Zar Sonucu: ${sonuc}`;

    // 3. Kritik Kontrolü (1 ve 20 için özel renk ve mesaj)
    
    // Önceki renk ayarlarını sıfırla
    sonucAlani.style.color = '#333'; 
    sonucAlani.style.border = 'none';

    if (sonuc === 20) {
        // Kritik Başarı
        sonucAlani.innerHTML += " 💥 (KRİTİK BAŞARI!)";
        sonucAlani.style.color = 'green';
        sonucAlani.style.border = '3px solid green';
        
    } else if (sonuc === 1) {
        // Kritik Başarısızlık
        sonucAlani.innerHTML += " 💀 (KRİTİK BAŞARISIZLIK!)";
        sonucAlani.style.color = 'red';
        sonucAlani.style.border = '3px solid red';
    }
}