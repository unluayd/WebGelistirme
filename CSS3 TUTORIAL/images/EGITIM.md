# Ders Notu — CSS3 TUTORIAL: Görseller Klasörü

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | CSS örneklerinde kullanılan görsel varlıklar |
| **Kimler için?** | Arka plan veya içerik görseli kullanan ders dosyalarını çalışan herkes |
| **Ön bilgi** | [CSS3 TUTORIAL çerçeve notu](../EGITIM.md) |

---

## 1. Kazanımlar

- `url()` veya `img` ile görsel yollarını doğru yönetmek.
- Görsel boyutu ve sayfa performansı ilişkisini fark etmek.

---

## 2. Giriş

CSS’te `background-image: url(...)` sık kullanılır. Dosyaların sabit bir klasörde olması, örnekleri başka ortama taşırken yolları düzeltmeyi kolaylaştırır.

---

## 3. Konu anlatımı

### 3.1. Yol çözümleme

CSS dosyası `css/` altındaysa görsellere `../images/dosya.png` gibi yollar gerekebilir. HTML’den bağlanan inline stilde yol HTML dosyasına göredir.

### 3.2. Tekrar

Aynı görseli birden fazla kural kullanıyorsa tek kopya yeterlidir.

---

## 4. Bu klasörün rolü

Genel CSS modülü örneklerine **görsel destek** sağlar.

---

## 5. Kendini değerlendirme

Arka plan görseli görünmüyorsa hangi iki yolu kontrol edersiniz (URL ve dosya varlığı)?

---

## 6. Uygulamalı çalışma

Küçük bir görsel ekleyip `background-size: cover` ile kutuya oturtmayı deneyin.

---

## 7. İlgili not

[CSS3 TUTORIAL çerçeve notu](../EGITIM.md)
