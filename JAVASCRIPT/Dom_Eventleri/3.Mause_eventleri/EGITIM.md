# Ders Notu — Fare Olayları (Mouse Events)

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Tıklama, bas-bırak, üzerine gelme olayları |
| **Ön bilgi** | [2. Klavye olayları](../2.Keyword_eventleri/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- `click`, `dblclick`, `mousedown`/`mouseup` gibi olayları ayırt etmek.  
- `mouseover`/`mouseout` ile `mouseenter`/`mouseleave` farkına giriş.

---

## 2. Giriş

Klasör adında **Mause** yazımı vardır; konu **mouse (fare)** olaylarıdır. Grafik arayüzlerde en yaygın etkileşim kanalıdır.

---

## 3. Konu anlatımı

### 3.1. Tıklama zinciri

`mousedown` → `mouseup` → `click` sırası tipiktir. Sürükle-bırak için `mousedown`’da başlatıp `mousemove` ve `mouseup`’ta bitirmek gerekir.

### 3.2. Kabarcıklanma

İç içe elemanlarda olay üstleri de tetikleyebilir; 5. derste detaylanır.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Fare olay örnekleri |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Hedef | Olayın başladığı en iç eleman |

---

## 6. Dikkat noktaları

Mobil cihazlarda “tıklama” ile dokunma birleştirilir; yalnız fare varsaymayın.

---

## 7. Kendini değerlendirme

`mouseenter` neden iç içe geçişlerde `mouseover`’dan daha az gürültülüdür?

---

## 8. Uygulamalı çalışma

Bir kutuda çift tıklama sayacı tutun.

---

## 9. Sonraki ders

[4. Girdi olayları](../4.Input_eventleri/EGITIM.md)
