# Ders Notu — DOM Ağacında Gezinme

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Ebeveyn, çocuk ve kardeş düğümlere erişim |
| **Ön bilgi** | [4. Özellik değiştirme](../4.element_ozellik_deg/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- `parentElement`, `children`, `childNodes` kullanımı.  
- `firstElementChild`, `nextElementSibling` gibi eleman odaklı API’lere aşinalık.

---

## 2. Giriş

Bazen hedef elemanı doğrudan seçmek yerine, **yakınındaki** bir düğümden yola çıkmak gerekir (ör. tıklanan sil düğmesinin `li` ebeveynini bulmak). Ağaçta gezinme bu ihtiyacı karşılar.

---

## 3. Konu anlatımı

### 3.1. `childNodes` vs `children`

`childNodes` metin düğümleri ve yorumları içerir; `children` yalnızca element çocuklarını verir.

### 3.2. Ebeveyn

`parentElement` çoğu senaryoda `null` olmayan element ebeveynini döner.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Liste/kart yapısında gezinme örnekleri |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Düğüm | Ağaçtaki tek birim |
| Metin düğümü | Boşluk ve satır sonları bile olabilir |

---

## 6. Dikkat noktaları

`childNodes[0]` beklenen “ilk eleman” olmayabilir; `firstElementChild` daha güvenilir olabilir.

---

## 7. Kendini değerlendirme

Bir `span` içindeki metni silmek için hangi ebeveyn/çocuk ilişkisini kullanırsınız?

---

## 8. Uygulamalı çalışma

Tıklanan öğenin en yakın `li` ataını `closest` (varsa) veya üst üste `parentElement` ile bulun (API desteğine göre).

---

## 9. Sonraki ders

[6. Dinamik eleman ekleme](../6.dinamik_element_ekleme/EGITIM.md)
