# Ders Notu — CSS3 Eğitim Projesi (Modül Çerçevesi)

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | CSS ile görünüm, kutu modeli, tipografi, layout, Flexbox ve duyarlı tasarım |
| **Kimler için?** | HTML iskeletini çıkarmış öğrenciler |
| **Ön bilgi** | [HTML5 ders notları](../HTML5/EGITIM.md) |
| **Tahmini çalışma** | Alt modül başına birkaç saat |

---

## 1. Kazanımlar

Bu çerçeve altında şunları hedefliyorsunuz:

- Stilin HTML’den ayrılması ve seçicilerle hedefleme.
- Renk, arka plan, kenarlık, margin, padding ve yazı özellikleri.
- Pseudo-sınıf/element, konumlandırma, float ve `display`.
- Flexbox ile esnek düzen ve medya sorguları ile duyarlılık.

---

## 2. Giriş

CSS (Cascading Style Sheets), belgenin **nasıl görüneceğini** tanımlar. “Cascade” (basamaklama), aynı elemana birden fazla kural geldiğinde hangisinin öne çıkacağını belirleme kurallarıdır. Bu proje, her konuyu ayrı HTML dosyalarıyla **gözlemleyerek** öğrenmeniz için tasarlanmıştır.

---

## 3. Alt modüller ve rolleri

| Alt modül | Ders notu | İçerik özeti |
|------------|-----------|----------------|
| CSS-basics | [CSS-basics/EGITIM.md](CSS-basics/EGITIM.md) | Seçicilerden position/float’a temel taşlar |
| Flexbox | [Flexbox/EGITIM.md](Flexbox/EGITIM.md) | Esnek kutu düzeni |
| Responsive | [Responsive/EGITIM.md](Responsive/EGITIM.md) | Medya sorguları ve birimler |
| Paylaşılan CSS | [css/EGITIM.md](css/EGITIM.md) | Ortak `style.css` |
| Görseller | [images/EGITIM.md](images/EGITIM.md), [Responsive/images/EGITIM.md](Responsive/images/EGITIM.md) | Medya varlıkları |

---

## 4. Önerilen çalışma sırası

1. **CSS-basics** — Numaralı dosyaları mümkün olduğunca sırayla (ileri konular 17–21, temellerden sonra).  
2. **Flexbox** — `1` sonra `2`.  
3. **Responsive** — `1` sonra `2`.  

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Seçici | Hangi HTML elemanlarına kural uygulanacağını belirten ifade |
| Özgüllük | Çakışmada hangi kuralın kazanacağını etkileyen ağırlık |
| Medya sorgusu | Koşula bağlı CSS bloğu (`@media`) |

---

## 6. Dikkat noktaları

- Tarayıcı önbelleği bazen eski CSS gösterir; gerekirde sert yenileme yapın.  
- `!important` aceleyle kullanıldığında bakımı zor stiller oluşur.

---

## 7. Kendini değerlendirme

1. Dahili ve harici CSS’in artı/eksi nedir?  
2. `margin` ile `padding` farkını kendi cümlelerinizle yazın.  
3. Flexbox hangi tür düzen problemlerinde özellikle iyidir?

---

## 8. Uygulamalı çalışma

Bir `CSS-basics` dosyasında tek bir özelliği (ör. `background-color`) değiştirip sonucu ekran görüntüsüyle not alın.

---

## 9. Sonraki modül

[Bootstrap ders notları](../BOOTSTRAP/EGITIM.md)
