# Ders Notu — JavaScript Temeller 12: window ve Tarayıcı Ortamı

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Global `window`, diyaloglar, zamanlayıcılar |
| **Ön bilgi** | [Ders 11](../11.loops/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- Tarayıcıda birçok global API’nin `window` altında toplanması.  
- `setTimeout` / `setInterval` ile gecikmeli ve periyodik çalışma.  
- `alert` / `prompt`’un modern UX’te sınırlı kullanımı.

---

## 2. Giriş

Tarayıcıda çalışan betik, **window** nesnesi üzerinden belgeye, konuma ve zamanlayıcılara erişir. DOM modülüne geçmeden önce “tarayıcı ortamı” farkındalığı kazanılır.

---

## 3. Konu anlatımı

### 3.1. Global isim alanı

`var` ile global değişkenler `window` özelliği olabilir; `let`/`const` farklı davranır.

### 3.2. Zamanlayıcılar

`setTimeout(fn, ms)` bir kez; `setInterval` tekrarlar. Temizlemek için `clearTimeout` / `clearInterval`.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | `window` ve zamanlayıcı örnekleri |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Global | Program genelinde erişilen |
| Callback | Sonradan çağrılan fonksiyon |

---

## 6. Dikkat noktaları

`alert` eğitim içindir; gerçek uygulamada modal veya satır içi mesaj tercih edilir.

---

## 7. Kendini değerlendirme

`setInterval` kullanırken neden `clearInterval` gerekebilir?

---

## 8. Uygulamalı çalışma

3 saniye sonra konsola tek mesaj yazdıran `setTimeout` yazın.

---

## 9. Sonraki modül

[DOM manipülasyonu](../../Dom_Manipilasyonu/EGITIM.md)
