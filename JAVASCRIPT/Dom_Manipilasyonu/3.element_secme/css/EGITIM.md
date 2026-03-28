# Ders Notu — Eleman Seçme: Stil Varlıkları (css klasörü)

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | `3.element_secme` örneğinin görsel ve tipografi desteği |
| **Ön bilgi** | [Eleman seçme dersi](../EGITIM.md) |
| **Materyaller** | `local-fonts.css`, `font-awesome.min.css` |

---

## 1. Kazanımlar

- Harici CSS dosyalarının ders sayfasına katkısını açıklamak.  
- Font Awesome gibi ikon setlerinin DOM’da genelde sınıf veya pseudo-element ile göründüğünü fark etmek.

---

## 2. Giriş

Bu alt klasör, **eleman seçimi** dersinin arayüzünü gerçekçi kılar. Öğrenci yalnızca `getElementById` öğrenmekle kalmaz; listedeki simgeler ve yazı tipleri, gerçek projelere benzer bir ağaç yapısı sunar.

---

## 3. Konu anlatımı

### 3.1. `local-fonts.css`

`@font-face` veya yerel yazı tipi tanımları içerir; sayfanın tipografisini kontrol eder.

### 3.2. `font-awesome.min.css`

İkon kütüphanesinin sıkıştırılmış stil dosyasıdır. İkonlar çoğunlukla `i` veya `span` üzerindeki sınıflarla çizilir; `app.js` içinde `e.target.className` gibi kontrollerle ilişkilidir.

---

## 4. Bu klasörün rolü

Eğitim **içeriği** üst dizindeki `EGITIM.md` ve `app.js`’tedir; bu klasör **sunum katmanı**dır.

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Varlık | CSS/ikon dosyası gibi yardımcı kaynak |
| Minify | Üretim için sıkıştırılmış CSS |

---

## 6. Dikkat noktaları

Yollar `index.html` konumuna göre ayarlanır; dosyayı taşıdığınızda `link href` yollarını güncelleyin.

---

## 7. Kendini değerlendirme

İkon sınıfı değiştiğinde JavaScript’teki `className` karşılaştırması neden kırılabilir?

---

## 8. Uygulamalı çalışma

Geliştirici araçlarında bir ikon öğesini seçip hangi sınıfların uygulandığını inceleyin.

---

## 9. İlgili ders

[Eleman seçme](../EGITIM.md)
