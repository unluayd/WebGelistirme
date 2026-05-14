# Ders Notu — Olay Kabarcıklanması (Event Bubbling)

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Olayın DOM’da yukarı yayılması ve kontrolü |
| **Ön bilgi** | [4. Girdi olayları](../4.Input_eventleri/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- Kabarcıklanma (bubbling) ile yakalama (capturing) fazlarını ayırt etmek.  
- `stopPropagation` ihtiyacını tanımak.  
- Olay delegasyonu için zemin oluşturmak.

---

## 2. Giriş

İç içe kutularda içteki elemana tıkladığınızda, olay önce hedefte işlenir, ardından (dinleyici varsa) **ebeveynler** üzerinde de tetiklenebilir. Bu **kabarcıklanmadır**. Bazen istenir (delegasyon), bazen `stopPropagation` ile kesilir.

---

## 3. Konu anlatımı

### 3.1. Delegasyon

Liste öğeleri çoğaldığında her birine ayrı dinleyici yerine üst `ul` veya `ol` üzerinde tek dinleyici kullanılabilir; `e.target` ile hangi öğe tıklandığı anlaşılır.

### 3.2. Yakalama fazı

`addEventListener(..., true)` üçüncü argümanı ile olay aşağı inerken yakalanır (capture).

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | İç içe yapıda tıklama ve yayılım örnekleri |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Delegasyon | Üst elemanda toplu dinleme |
| Yayılım fazı | Capture ve bubble sırası |

---

## 6. Dikkat noktaları

Gereksiz `stopPropagation` başka dinleyicileri “susturur”; dikkatli kullanın.

---

## 7. Kendini değerlendirme

Delegasyonun performans ve bellek açısından avantajı nedir?

---

## 8. Uygulamalı çalışma

Tek bir üst `div` dinleyicisi ile altındaki farklı düğmeleri `e.target` ile ayırt edin.

---

## 9. Sonraki modül

[Depolama alanları](../../Depolama_Alanlari/EGITIM.md)
