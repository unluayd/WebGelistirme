# Ders Notu — Dinamik Eleman Değiştirme

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Mevcut düğümü yeni içerik veya elemanla değiştirme |
| **Ön bilgi** | [7. Silme](../7.dinamik_element_silme/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- `replaceChild`, `replaceWith` (destekleniyorsa) gibi yöntemlere aşinalık.  
- Yalnızca içerik mi değişecek yoksa düğüm mü sorusunu ayırt etmek.

---

## 2. Giriş

Bazen elemanı silip yeniden eklemek yerine **yerinde değiştirmek** daha az titremeli bir UX verir (ör. yükleme durumundan içerik durumuna geçiş). Bazen de tamamen yeni düğüm gereklidir.

---

## 3. Konu anlatımı

### 3.1. İçerik güncellemesi

Sadece metin veya HTML yapısı değişecekse `textContent` veya kontrollü `innerHTML` düşünülür.

### 3.2. Düğüm değişimi

Yeni `createElement` üretilip eski düğümün yerine konur; eski düğüme bağlı dinleyiciler kaybolabilir.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Değiştirme senaryoları |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Yerinde güncelleme | Ağaçta aynı “yer”in korunması |

---

## 6. Dikkat noktaları

Düğüm değişince `querySelector` ile saklanan eski referanslar geçersiz kalır.

---

## 7. Kendini değerlendirme

`innerHTML` ile bir `div`’in içini değiştirmek, `replaceWith` ile tüm `div`’i değiştirmek arasında olay dinleyicileri açısından fark?

---

## 8. Uygulamalı çalışma

Bir kartın başlık elemanını yeni bir `h5` ile değiştirin.

---

## 9. Sonraki ders

[9. Dinamik manipülasyon ve olay fazları](../9.dinamik_element_man/EGITIM.md)
