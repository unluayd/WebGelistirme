# Ders Notu — JavaScript Temeller 8: Date Nesnesi

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | `Date` ile zaman damgası, bileşen okuma, yaygın tuzaklar |
| **Ön bilgi** | [Ders 7](../7.object_literal/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- `new Date()` ile anlık zaman.  
- Yerel saat ve UTC farkına dair farkındalık.  
- Üretim uygulamalarında tarih kütüphanesi ihtiyacını tanımak.

---

## 2. Giriş

Tarih ve saat, arayüzde gösterim, sıralama ve süre hesabı için gereklidir. JavaScript’in yerleşik `Date` nesnesi kullanışlıdır ancak saat dilimi ve biçimlendirme konularında sınırları vardır.

---

## 3. Konu anlatımı

### 3.1. Oluşturma

`new Date(isoString)` veya bileşen argümanları kullanılabilir.

### 3.2. Okuma

`getFullYear`, `getMonth` (0 tabanlı!), `getDate` vb.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Tarih örnekleri |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| UTC | Eşgüdümlü evrensel zaman |
| Epoch | Zamanın sayısal referansı (ms) |

---

## 6. Dikkat noktaları

`getMonth()` 0–11 döner; bu sık hatadır.

---

## 7. Kendini değerlendirme

İki `Date` örneğini `>` ile karşılaştırmak neyi ölçer?

---

## 8. Uygulamalı çalışma

Bugünün tarihini `tr-TR` yerel ayarıyla `toLocaleDateString` ile yazdırın.

---

## 9. Sonraki ders

[9. Koşul durumları](../9.kosul_durumlari/EGITIM.md)
