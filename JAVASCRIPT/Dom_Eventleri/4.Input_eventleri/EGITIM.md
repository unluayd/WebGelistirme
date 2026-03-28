# Ders Notu — Girdi (Input) Olayları

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Odak, değişim, pano ve metin seçimi olayları |
| **Ön bilgi** | [3. Fare olayları](../3.Mause_eventleri/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- `focus` / `blur` ile odak yönetimi.  
- `input` ile canlı değer izleme.  
- `cut` / `copy` / `paste` ve `select` olaylarına aşinalık.

---

## 2. Giriş

Formlar ve arama kutuları, kullanıcı yazdıkça tepki vermelidir. **Input olayları**, doğrulama, otomatik tamamlama ve filtreleme için temeldir.

---

## 3. Konu anlatımı

### 3.1. `input` vs `change`

`input` her değişiklikte; `change` çoğu kontrolde odak kaybında veya seçimde tetiklenir.

### 3.2. Pano olayları

Kullanıcı deneyimi ve güvenlik politikaları pano erişimini kısıtlayabilir.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Çoklu olay dinleyicileri, `e.type` gözlemi |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Canlı doğrulama | Yazarken hata gösterme |

---

## 6. Dikkat noktaları

Her tuş vuruşunda ağır işlem yapmak performansı düşürür; geciktirme (debounce) ileri konudur.

---

## 7. Kendini değerlendirme

Canlı arama için `change` yeterli midir, neden?

---

## 8. Uygulamalı çalışma

Filtre kutusuna yazıldıkça liste öğelerini gizleyip gösteren basit bir mantık kurun.

---

## 9. Sonraki ders

[5. Olay kabarcıklanması](../5.Event_bubbling/EGITIM.md)
