# Ders Notu — Dinamik Eleman Silme

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | DOM’dan eleman kaldırma (`remove`, `removeChild`) |
| **Ön bilgi** | [6. Ekleme](../6.dinamik_element_ekleme/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- Bir düğümü ağaçtan çıkarmanın iki yaygın yolunu kullanmak.  
- Silme sonrası olay dinleyicilerinin ve referansların durumunu düşünmek.

---

## 2. Giriş

Todo listeleri, bildirimler ve geçici panel elemanları sıkça **kaldırılır**. Silme işlemi hem görünümü hem de bellekteki ilişkileri etkiler.

---

## 3. Konu anlatımı

### 3.1. `element.remove()`

Modern ve okunaklı; düğümü doğrudan kaldırır.

### 3.2. `ebeveyn.removeChild(cocuk)`

Eski kalıp; ebeveyn ve çocuk referansı gerekir.

### 3.3. Toplu temizlik

`innerHTML = ""` hızlı ama olay dinleyicileri ve bazı durumlarda bellek yönetimi açısından dikkat ister.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Silme tetikleyicileri ve DOM güncellemesi |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Orphan düğüm | Ağaçtan kopmuş ama hâlâ JS referansı olabilen düğüm |

---

## 6. Dikkat noktaları

Silinen elemana ait referanslar `null` kontrolü gerektirebilir.

---

## 7. Kendini değerlendirme

`removeChild` kullanırken neden bazen `null` hatası alınır?

---

## 8. Uygulamalı çalışma

Listeyi tek düğmeyle tamamen boşaltın; ardından tek tek silmeyi deneyin.

---

## 9. Sonraki ders

[8. Dinamik eleman değiştirme](../8.dinamik_element_deg/EGITIM.md)
