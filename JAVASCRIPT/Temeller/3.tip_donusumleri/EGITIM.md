# Ders Notu — JavaScript Temeller 3: Tip Dönüşümleri

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Dizge–sayı dönüşümleri, `NaN`, `parseInt` / `parseFloat` |
| **Ön bilgi** | [Ders 2](../2.var-let-const/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- Kullanıcı ve DOM’dan gelen verinin çoğunlukla dizge olduğunu bilmek.  
- Açık dönüşüm ve `NaN` kontrolü ihtiyacı.

---

## 2. Giriş

JavaScript birçok bağlamda **örtük dönüşüm** yapar; bu bazen beklenmedik sonuç verir. Sayı işlemleri öncesi açık çevirim güvenlidir.

---

## 3. Konu anlatımı

### 3.1. Number ve dizge

`Number("42")`, `parseInt("10px", 10)` gibi kalıplar yaygındır. Geçersiz çevirim `NaN` üretir.

### 3.2. NaN

`NaN` kendine eşit değildir; kontrol için `Number.isNaN` kullanılır.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Dönüşüm örnekleri |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| NaN | “Not a Number” — geçersiz sayısal sonuç |
| Radix | `parseInt` için taban (genelde 10) |

---

## 6. Dikkat noktaları

`parseInt` ondalıkları beklediğiniz gibi işlemeyebilir; ondalık için `parseFloat`.

---

## 7. Kendini değerlendirme

`"5" + 3` ile `Number("5") + 3` farkı nedir?

---

## 8. Uygulamalı çalışma

Formdan gelen gibi düşünüp dizgeyi sayıya çevirip toplama yapın.

---

## 9. Sonraki ders

[4. Dizgeler](../4.strings/EGITIM.md)
