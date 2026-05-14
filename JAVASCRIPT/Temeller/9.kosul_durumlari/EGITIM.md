# Ders Notu — JavaScript Temeller 9: Koşul Durumları

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | `if` / `else`, ternary, `switch`, mantıksal operatörler |
| **Ön bilgi** | [Ders 8](../8.date_object/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- Koşullu dallanma ile program akışını kontrol etme.  
- Truthy/falsy yorumuna giriş.

---

## 2. Giriş

Gerçek programlar nadiren yukarıdan aşağı düz çizgidir. Kullanıcı rolü, form doğrulaması, hata durumları **koşullarla** yönetilir.

---

## 3. Konu anlatımı

### 3.1. if / else if / else

İlk doğru koşulun bloğu çalışır.

### 3.2. Ternary

`koşul ? a : b` kısa ifadeler için; iç içe kullanım okunabilirliği düşürür.

### 3.3. switch

Çok sayıda sabit değere göre dallanmada kullanılır; `break` unutulursa düşme (fall-through) olur.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Koşul örnekleri |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Truthy | Koşulda true sayılan değer |
| Falsy | `0`, `""`, `null`, `undefined`, `NaN`, `false` |

---

## 6. Dikkat noktaları

`==` ile `===` farkı: `===` tür zorlaması yapmaz (genelde tercih edilir).

---

## 7. Kendini değerlendirme

`if ([])` bloğu çalışır mı?

---

## 8. Uygulamalı çalışma

Yaş veya nota göre harf notu veren bir `if` zinciri yazın.

---

## 9. Sonraki ders

[10. Fonksiyonlar](../10.functions/EGITIM.md)
