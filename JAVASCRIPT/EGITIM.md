# Ders Notu — JavaScript Eğitim Projesi (Genel Çerçeve)

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | İstemci tarafı JavaScript: dil temelleri, DOM, olaylar, Web Storage |
| **Kimler için?** | HTML/CSS bilen; etkileşimli sayfa geliştirmek isteyen öğrenciler |
| **Ön bilgi** | [HTML5](../../HTML5/EGITIM.md); isteğe bağlı [CSS3](../../CSS3%20TUTORIAL/EGITIM.md) |
| **Tahmini çalışma** | Modül başına birkaç gün (kendi hızınıza göre) |

---

## 1. Kazanımlar

Bu çerçeve altında:

- Değişkenler, türler, diziler, nesneler, fonksiyonlar, döngüler ve koşullar.
- `document` ve DOM API ile eleman seçme, özellik değiştirme, ağaçta gezinme, dinamik ekleme/silme.
- Olay dinleyicileri, olay nesnesi ve kabarcıklanma/yakalama fikri.
- `sessionStorage` ve `localStorage` ile tarayıcıda anahtar–değer saklama.

---

## 2. Giriş

JavaScript, tarayıcıda çalışan **betik** dilidir (başka ortamlarda da çalışır; bu projede odak tarayıcıdır). HTML yapıyı, CSS görünümü, JavaScript ise **davranışı** ve veri işlemeyi üstlenir.

---

## 3. Alt modüller

| Modül | Ders notu | İçerik |
|--------|-----------|--------|
| Temeller | [Temeller/EGITIM.md](Temeller/EGITIM.md) | Dil sözdizimi ve temel yapılar |
| DOM manipülasyonu | [Dom_Manipilasyonu/EGITIM.md](Dom_Manipilasyonu/EGITIM.md) | `document`, seçim, içerik, dinamik DOM |
| DOM olayları | [Dom_Eventleri/EGITIM.md](Dom_Eventleri/EGITIM.md) | Dinleyiciler ve olay türleri |
| Depolama | [Depolama_Alanlari/EGITIM.md](Depolama_Alanlari/EGITIM.md) | Session ve local storage |

**Not:** `Todo_List_Project` klasörü bu ders notu setine dahil edilmemiştir.

---

## 4. Çalışma yöntemi

1. İlgili alt klasördeki `index.html` dosyasını tarayıcıda açın.  
2. `app.js` dosyasını düzenleyin; **Console** (F12) çıktısını izleyin.  
3. Kod satırlarını sırayla yorumlayıp tek tek etkisini görün.

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| DOM | Belgenin tarayıcıdaki nesne modeli |
| Olay (event) | Tıklama, gönderim, klavye vb. kullanıcı/ortam sinyali |
| API | Tarayıcının sunduğu hazır nesne ve fonksiyon kümesi |

---

## 6. Dikkat noktaları

- `innerHTML` ile kullanıcı girdisi basmak XSS riski oluşturur.  
- Depolamada hassas veri saklamak güvenli değildir.

---

## 7. Kendini değerlendirme

1. DOM güncellemesi ile `console.log` arasındaki fark nedir (kullanıcı ne görür)?  
2. `addEventListener` neden HTML’de `onclick` yazmaya göre çoğu zaman tercih edilir?

---

## 8. Uygulamalı çalışma

[Temeller → 1. değişken](Temeller/1.degisken_tanimlama/EGITIM.md) ile başlayıp sırayla ilerleyin.

---

## 9. Önceki modül (projede)

[Bootstrap ders notları](../BOOTSTRAP/EGITIM.md)
