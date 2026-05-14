# Ders Notu — CSS Flexbox

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Esnek kutu düzeni: flex konteyneri ve flex öğeleri |
| **Kimler için?** | Kutu modelini öğrenmiş; hizalama sorunlarını çözmek isteyen öğrenciler |
| **Ön bilgi** | [CSS-basics ders notları](../CSS-basics/EGITIM.md) |
| **Tahmini çalışma** | 1–2 saat |

---

## 1. Kazanımlar

- `display: flex` ile konteyner oluşturma.
- Ana eksen ve çapraz eksen kavramlarını açıklama.
- `justify-content`, `align-items`, `align-content`, `flex-wrap`, `flex-direction` kullanımı.
- Öğe düzeyinde `flex-grow`, `flex-shrink`, `flex-basis`, `order`, `align-self`.

---

## 2. Giriş

Flexbox, tek boyutlu düzen (bir satır **veya** bir sütun) senaryolarında hizalamayı basitleştirir. Dikey ortalama, eşit dağılım ve sıra değiştirme gibi klasik CSS zorluklarını azaltır.

---

## 3. Konu anlatımı

### 3.1. `1.Flexbox.html` — Konteyner

Flex öğeleri doğrudan çocuklardır. Ana eksen yönü `flex-direction` ile belirlenir. `justify-content` ana eksende, `align-items` çapraz eksende hizalar. `flex-wrap` taşmayı satıra böler.

### 3.2. `2.Flexitem.html` — Öğeler

`flex-basis` başlangıç boyutu; `grow` ve `shrink` fazla/eksik alana göre büyüme/küçülme oranlarını verir. `order` görsel sırayı DOM sırasından bağımsız değiştirir (erişilebilirlikte dikkat).

---

## 4. Dosya rehberi

| Dosya | Odak |
|--------|------|
| `1.Flexbox.html` | Flex konteyner özellikleri |
| `2.Flexitem.html` | Flex öğe özellikleri |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Ana eksen | `flex-direction` ile belirlenen asıl dizilim doğrultusu |
| Çapraz eksen | Ana eksene dik doğrultu |

---

## 6. Dikkat noktaları

- İki boyutlu karmaşık ızgara her zaman Flexbox yerine CSS Grid ile daha doğal olabilir.  
- `order` ile tab sırasını bozmamaya dikkat (klavye ile gezinme).

---

## 7. Kendini değerlendirme

1. `justify-content: space-between` ile `space-around` farkı?  
2. `align-items: stretch` ne zaman varsayılan davranışı bozar?

---

## 8. Uygulamalı çalışma

Üç kutulu bir navbar ve ortada logo simülasyonu için `1.Flexbox.html` üzerinde deneme yapın.

---

## 9. Sonraki alt modül

[Responsive ders notları](../Responsive/EGITIM.md)
