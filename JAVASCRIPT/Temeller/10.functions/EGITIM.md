# Ders Notu — JavaScript Temeller 10: Fonksiyonlar

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Bildirim, ifade, `return`, IIFE, basit kapsam örnekleri |
| **Ön bilgi** | [Ders 9](../9.kosul_durumlari/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- Parametre ve argüman ayrımı.  
- `return` ile değer döndürme; `return` sonrasının çalışmaması.  
- Fonksiyon ifadesi ve IIFE kavramına aşinalık.

---

## 2. Giriş

Fonksiyon, tekrar kullanılabilir davranış paketidir. Kod tekrarını azaltır, test etmeyi kolaylaştırır ve okunabilirliği artırır.

---

## 3. Konu anlatımı

### 3.1. Bildirim vs. ifade

Bildirim hoisting ile farklı davranabilir; ifade değişkene atanır (`const fn = ...`).

### 3.2. return

Dönüş değeri çağıran ifadeye iletilir; `return` olmayan fonksiyon `undefined` döner.

### 3.3. IIFE

Hemen çağrılan fonksiyon ifadesi, geçici kapsam oluşturmak için tarihsel olarak kullanılmıştır.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Fonksiyon örnekleri |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Parametre | Tanımdaki yer tutucu |
| Argüman | Çağrıda geçilen gerçek değer |

---

## 6. Dikkat noktaları

`return` satırından sonra yazılan kod “ölü kod” olur.

---

## 7. Kendini değerlendirme

İki sayıyı toplayan ve sonucu döndüren fonksiyon ile sadece konsola yazdıran fonksiyon arasındaki kullanım farkı?

---

## 8. Uygulamalı çalışma

Bir fonksiyonu başka fonksiyonun içinde çağırıp sonucu zincirleyin (`cube(square(3))` gibi).

---

## 9. Sonraki ders

[11. Döngüler](../11.loops/EGITIM.md)
