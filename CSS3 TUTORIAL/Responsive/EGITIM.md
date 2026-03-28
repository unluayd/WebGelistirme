# Ders Notu — Duyarlı (Responsive) Tasarım

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Medya sorguları ve CSS birimleri |
| **Kimler için?** | Flexbox/CSS temelini bitirmiş öğrenciler |
| **Ön bilgi** | [CSS-basics](../CSS-basics/EGITIM.md), [Flexbox](Flexbox/EGITIM.md) |
| **Tahmini çalışma** | 1–1,5 saat |

---

## 1. Kazanımlar

- `@media` ile ekran genişliğine göre stil değiştirme.
- Piksel, yüzde, `em`/`rem`, `vh`/`vw` birimlerinin davranış farklarını tarif etme.
- “Mobil önce” veya “masaüstü önce” stratejilerine sözlü düzeyde aşinalık.

---

## 2. Giriş

Kullanıcılar farklı cihazlardan bağlanır. **Responsive** tasarım, aynı HTML’in dar ve geniş ekranda okunaklı kalmasını hedefler. Medya sorguları, “şu genişlikten sonra şu kurallar geçerli olsun” demenin standart yoludur.

---

## 3. Konu anlatımı

### 3.1. `1.media-query.html`

Tipik kalıp:

```css
@media (max-width: 768px) {
  /* dar ekran kuralları */
}
```

Kırılma noktaları proje ihtiyacına göre seçilir; tek “doğru” değer yoktur.

### 3.2. `2.different-unit.html`

**Rem** genelde kök yazı boyutuna göre ölçeklenir; **em** üst elemana göre büyüyebilir. **Vh/vw** görüntü alanına göredir; mobil tarayıcılarda adres çubuğu hareketi bazen yükseklik hesaplarını etkiler.

---

## 4. Dosya rehberi

| Dosya | Konu |
|--------|------|
| `1.media-query.html` | Medya sorguları |
| `2.different-unit.html` | Birim karşılaştırması |

Görseller: [images/EGITIM.md](images/EGITIM.md)

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Breakpoint | Düzenin değiştiği genişlik eşiği |
| Viewport | Kullanıcının görünür tarayıcı alanı |

---

## 6. Dikkat noktaları

- Çok fazla breakpoint bakımı zorlaştırır.  
- Dokunmatik hedefler için yeterli tıklanabilir alan bırakın.

---

## 7. Kendini değerlendirme

1. `max-width` ile `min-width` medya sorgularında farklı düşünmek ne anlama gelir?  
2. Neden sadece piksel kullanmak erişilebilir zoom senaryolarında sorun çıkarabilir?

---

## 8. Uygulamalı çalışma

Bir başlığın font boyutunu iki breakpoint’te farklı yapın; tarayıcıyı daraltıp genişleterek test edin.

---

## 9. Sonraki modül (projede)

[Bootstrap ders notları](../../BOOTSTRAP/EGITIM.md)
