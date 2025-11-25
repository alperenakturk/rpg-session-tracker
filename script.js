/* --------------------------------------
   1. PANEL DEĞİŞTİRME FONKSİYONU
-------------------------------------- */
function zarPaneliniDegistir() {
    let secim = document.getElementById("zar-tipi").value;
    
    // Panelleri çağır
    let fatePaneli = document.getElementById("fate-paneli");
    let dndPaneli = document.getElementById("dnd-paneli");

    // Hepsini gizle
    fatePaneli.style.display = "none";
    dndPaneli.style.display = "none";

    // Seçileni göster
    if (secim === "fate") {
        fatePaneli.style.display = "block";
    } else if (secim === "dnd") {
        dndPaneli.style.display = "block";
    }
}

/* --------------------------------------
   2. D&D (D20) ZAR ATMA
-------------------------------------- */
function d20At() {
    let sonuc = Math.floor(Math.random() * 20) + 1; 
    let sonucAlani = document.getElementById("dnd-sonuc");
    
    sonucAlani.innerHTML = `Zar Sonucu: ${sonuc}`;
    
    // Renk Efektleri
    sonucAlani.style.color = "#333";
    if (sonuc === 20) {
        sonucAlani.innerHTML += " 💥 (KRİTİK!)";
        sonucAlani.style.color = "green";
    } else if (sonuc === 1) {
        sonucAlani.innerHTML += " 💀 (FİYASKO!)";
        sonucAlani.style.color = "red";
    }
}

/* --------------------------------------
   3. FATE ZARI ATMA
-------------------------------------- */
function fateZariAt() {
    let toplam = 0;
    let arti = 0, eksi = 0, bos = 0;
    let gorsel = ""; 

    for (let i = 0; i < 4; i++) {
        let r = Math.floor(Math.random() * 3); 
        if (r === 2) { // ARTI
            toplam++; arti++;
            gorsel += "<span style='color:green; font-weight:bold; font-size:1.5em;'>[+]</span> ";
        } else if (r === 0) { // EKSİ
            toplam--; eksi++;
            gorsel += "<span style='color:red; font-weight:bold; font-size:1.5em;'>[-]</span> ";
        } else { // BOŞ
            bos++;
            gorsel += "<span style='color:#ccc; font-weight:bold; font-size:1.5em;'>[ ]</span> ";
        }
    }

    let isaretliToplam = toplam > 0 ? "+" + toplam : toplam;
    let sonucAlani = document.getElementById("fate-sonuc");

    sonucAlani.innerHTML = `
        <div>${gorsel}</div>
        <hr style="width:50%; margin:10px auto;">
        <div style="font-size:2em; font-weight:bold;">TOPLAM: ${isaretliToplam}</div>
        <div style="font-size:0.8em; color:#666;">(+${arti}) (-${eksi}) (Boş ${bos})</div>
    `;
}

/* --------------------------------------
   4. KARAKTER FİLTRELEME (Eski Kod Aynen Kalıyor)
-------------------------------------- */
function karakterleriFiltrele() {
    let secim = document.getElementById("frp-secici").value;
    let karakterler = document.querySelectorAll(".karakter-kutusu");

    karakterler.forEach(function(kutu) {
        let maceraTuru = kutu.getAttribute("data-macera-basligi");
        if (secim === maceraTuru) {
            kutu.style.display = "block"; 
        } else {
            kutu.style.display = "none"; 
        }
    });
}