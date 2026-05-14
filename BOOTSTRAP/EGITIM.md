# Ders Notu — Bootstrap 4 ile Arayüz Bileşenleri

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Bootstrap 4 kullanımı: CDN, grid, yardımcı sınıflar, kart, form, tablo, gezinme |
| **Kimler için?** | HTML temelini bitirmiş; CSS’e en azından kutu modeli düzeyinde bakan öğrenciler |
| **Ön bilgi** | [HTML5 ders notları](../HTML5/EGITIM.md); isteğe bağlı [CSS3 TUTORIAL](../CSS3%20TUTORIAL/EGITIM.md) |
| **Tahmini çalışma** | Her HTML dosyası için 30–60 dakika (inceleme + deneme) |

---

## 1. Kazanımlar

Bu ünite sonunda şunları hedefliyorsunuz:

- Bootstrap CSS’ini CDN ile sayfaya dahil etmek ve sürümün (`4.6.x`) farkında olmak.
- `container`, `row`, `col-*` ile 12 sütunlu ızgara düzenini açıklamak.
- Margin/padding yardımcıları ve hizalama sınıflarını (`justify-content-*`, `align-items-*`) kullanmak.
- Kart, tablo, liste, form ve navbar örneklerinde sınıf isimlerini okuyup özelleştirme yapmak.

---

## 2. Giriş: Bootstrap nedir, ne değildir?

**Bootstrap**, önceden yazılmış CSS (ve isteğe bağlı JS) sınıflarıyla tutarlı arayüz üretmenizi sağlayan bir **ön uç çerçevesidir**. “CSS yazmayı öğrenmek” yerine geçmez; ancak üretim hızı ve tutarlılık için güçlü bir araçtır. Kendi CSS’inizi `style` veya harici dosyayla Bootstrap ile **birlikte** kullanabilirsiniz (örneklerde de vardır).

---

## 3. Konu anlatımı

### 3.1. Izgara (grid) mantığı

Satır (`row`) içinde sütunlar (`col-md-6` gibi) toplamda 12 birime oturur. Küçük ekranlarda sütunların alt alta gelmesi, büyük ekranda yan yana durması tipik bir hedeftir.

### 3.2. Yardımcı sınıflar

Boşluk (`m-*`, `p-*`), metin hizası, arka plan renkleri gibi tekrarlayan ihtiyaçlar tek sınıfla çözülür. Bu, tutarlı “tasarım sistemi” hissi verir.

### 3.3. Bileşenler

Kart (`card`), form kontrolleri, tablo stilleri ve `navbar`, tekrar tekrar yazılacak HTML kalıplarını kısaltır. Her bileşenin dokümantasyonunda varyantlar (renk, boyut) listelenir; siz burada dosya içi örneklerle pratik yaparsınız.

---

## 4. Bu klasördeki dosya rehberi

| Dosya | Ders bağlantısı |
|--------|-----------------|
| `1.bootstrap.html` | CDN, container/row/col, hizalama yardımcıları, özel CSS ile birlikte kullanım |
| `2.margin-padding.html` | `m-*`, `p-*` ve yön önekleri (`t`, `b`, `x`, `y` vb.) |
| `3.images-cards.html` | Görseller ve `card`, `card-body` |
| `4.tables-lists.html` | Tablo ve liste stilleri |
| `5.forms-inputs.html` | Form grupları, etiketler, giriş türleri |
| `6.navigation.html` | Navbar ve duyarlı menü yapısı |
| `7.deneme.html`, `8.deneme2.html` | Serbest tekrar / alıştırma sayfaları |

Görseller için alt klasör: [images/EGITIM.md](images/EGITIM.md).

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| CDN | Bootstrap dosyasının uzak sunucudan `link` ile yüklenmesi |
| Container | İçeriği yatayda sınırlayıp ortalamaya yardımcı sarmalayıcı |
| Breakpoint | Sütun davranışının değiştiği ekran genişliği eşiği |

---

## 6. Yaygın hatalar ve dikkat noktaları

- `row` doğrudan `container` dışına konursa yatay kayma (overflow) yaşanabilir.  
- Sütunların toplamının satırda 12’yi aşması beklenmedik satır kırılmalarına yol açar.  
- Örnek dosyalarda yazım/HTML hatası varsa tarayıcı konsolunu ve doğrulayıcıyı kullanın; eğitim amaçlı eski kod olabilir.

---

## 7. Kendini değerlendirme

1. `col-md-6` ile `col-6` aynı davranışı her ekranda verir mi?  
2. Bootstrap’i neden tamamen indirip yerel de kullanabilirsiniz, CDN’in riski nedir?  
3. Kart gövdesine kendi sınıfınızı ekleyerek rengi nasıl özelleştirirsiniz?

---

## 8. Uygulamalı çalışma

1. `1.bootstrap.html` içinde bir sütunun genişliğini değiştirip sonucu gözlemleyin.  
2. `2.margin-padding.html` ile aynı kutuya farklı `m-*`/`p-*` vererek farkı ölçün.  
3. `6.navigation.html`’i dar ekranda (geliştirici araçları mobil görünüm) test edin.

---

## 9. Sonraki / önceki adımlar

- Önceki: [CSS3 TUTORIAL](../CSS3%20TUTORIAL/EGITIM.md)  
- Sonraki: [JavaScript genel bakış](../JAVASCRIPT/EGITIM.md)  
