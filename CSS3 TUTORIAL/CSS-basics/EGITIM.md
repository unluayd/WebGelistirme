# Ders Notu — CSS Temelleri (CSS-basics)

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | CSS sözdizimi, seçiciler, kutu modeli, tipografi, pseudo yapılar, tablo, overflow, position, float, display, boyut |
| **Kimler için?** | HTML bilen ve stil yazmaya başlayan öğrenciler |
| **Ön bilgi** | [HTML5 ders notları](../../HTML5/EGITIM.md) |
| **Tahmini çalışma** | Dosya başına 25–50 dakika |

---

## 1. Kazanımlar

- Stili üç şekilde (harici, dahili, satır içi) uygulayabilme ve ne zaman hangisini seçeceğini tartışabilme.
- Element, sınıf ve id seçicileri ile kuralları hedefleme.
- Renk, arka plan, kenarlık, margin, padding, yazı ve metin özellikleri.
- Pseudo-sınıf ve pseudo-element kullanımı; `nth-*` seçicilerine giriş.
- Tablo ve overflow ile içerik taşması.
- `position` ve `float` ile klasik yerleşim; `display` ve genişlik/yükseklik.

---

## 2. Giriş

CSS kuralları **seçici** ve **bildirim bloğundan** oluşur. Bildirimler `özellik: değer;` çiftleridir. Aynı elemana birden fazla kural uygulanırsa özgüllük, kaynak sırası ve `!important` (dikkatli kullanın) sonucu belirler.

---

## 3. Konu anlatımı (dosya eşlemesi)

### 3.1. Başlangıç (1–4)

`1.using.html` stilin nereye yazıldığını gösterir. `2.basic-selectors.html` hedefleme dilini öğretir. `3.orders.html` çakışma ve sırayı işler. `4.webdevelopertolls.html` tarayıcı araçlarıyla incelemeyi vurgular.

### 3.2. Görsel temel (5–9)

Renk ve arka plan (`5`, `6`), kenarlık (`7`), boyut (`8`), görüntüleme türü (`9`) görünür sonuç üretir; her dosyada tek bir eksene odaklanın.

### 3.3. Kutu modeli (10–11)

**Margin** dış boşluk, **padding** iç boşluktur. `box-sizing` (ileri konularda) toplam genişlik hesabını etkiler.

### 3.4. Tipografi (12–14)

Metin hizası, satır yüksekliği, yazı ailesi ve boyut. İkon örneği (`14`) pratik arayüz parçasıdır.

### 3.5. İleri seçiciler (15–17)

`:hover` gibi durumlar ve `::before` gibi yapay elemanlar. Yapısal seçiciler belirli sıradaki çocukları hedefler.

### 3.6. Tablo ve taşma (18–19)

Tablo hücrelerine stil; taşan içeriği kesme veya kaydırma.

### 3.7. Yerleşim (20–21)

**Position** akıştan çıkma ve katmanlar için; **float** tarihsel olarak yan yana dizilim için kullanılmıştır (Flexbox/Grid çağında “anlama” değeri yüksek).

---

## 4. Dosya rehberi

| Dosya | Konu |
|--------|------|
| `1.using.html` | CSS kullanım biçimleri |
| `2.basic-selectors.html` | Seçiciler |
| `3.orders.html` | Kural sırası |
| `4.webdevelopertolls.html` | Geliştirici araçları |
| `5.colors.html` | Renk |
| `6.background-colors.html` | Arka plan |
| `7.borders.html` | Kenarlık |
| `8.width-heigt.html` | Genişlik/yükseklik |
| `9.display.html` | Display |
| `10.margin.html` | Margin |
| `11.padding.html` | Padding |
| `12.texts.html` | Metin |
| `13.fonts.html` | Yazı tipi |
| `14.icons.html` | İkonlar |
| `15.pseudo-class.html` | Pseudo-sınıf |
| `16.pseudo-elements.html` | Pseudo-element |
| `17.Nth-child-selector.html` | nth seçiciler |
| `18.tables.html` | Tablolar |
| `19.overflow.html` | Overflow |
| `20.position.html` | Position |
| `21.float.html` | Float |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Özgüllük | Kuralların “gücü” |
| Kutu modeli | İçerik, padding, border, margin |
| Pseudo-element | `::before` gibi seçicide oluşturulan sanal eleman |

---

## 6. Dikkat noktaları

- `margin` dikeyde çökme (collapse) gösterebilir.  
- `position: absolute` için üstte uygun konumlandırılmış ata gerekir.  
- Float temizliği (`clearfix`) gerekebilir.

---

## 7. Kendini değerlendirme

1. Sınıf seçicisi ile id seçicisi özgüllükte nasıl sıralanır?  
2. `display: none` ile `visibility: hidden` farkı?  
3. Neden çoğu yeni düzen Flexbox veya Grid ile kurulur?

---

## 8. Uygulamalı çalışma

`19.overflow.html` ve `20.position.html`’de tek özelliği değiştirip layout’u gözlemleyin; sonucu not defterine çizin.

---

## 9. Sonraki alt modül

[Flexbox ders notları](../Flexbox/EGITIM.md)
