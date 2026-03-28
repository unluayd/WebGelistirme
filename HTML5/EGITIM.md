# Ders Notu — HTML5: Sayfa Yapısı ve İçerik İşaretleme

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | HTML5 ile belge iskeleti, metin, bağlantı, medya, tablo, liste ve formlar |
| **Kimler için?** | Web’e yeni başlayan veya yapıyı sistematik tekrar etmek isteyen öğrenciler |
| **Ön bilgi** | Temel bilgisayar kullanımı |
| **Tahmini çalışma** | Her `.html` dosyası için 20–45 dakika |

---

## 1. Kazanımlar

Bu modülü tamamladığınızda:

- Geçerli bir HTML belgesinin `doctype`, `html`, `head`, `body` yapısını kurabilirsiniz.
- Başlık hiyerarşisi, paragraf, vurgu ve bağlantı etiketlerini doğru bağlamda kullanırsınız.
- Görsel, ses ve video için uygun etiketleri ve `alt` gibi erişilebilirlik özniteliklerini tanırsınız.
- `id` ve `class` ile stil/JavaScript için kanca oluşturduğunuzu anlarsınız.
- Form elemanlarıyla kullanıcı girdisi toplamanın temelini kurarsınız.

---

## 2. Giriş: HTML’in rolü

HTML (HyperText Markup Language), web sayfasının **anlamını ve yapısını** tarayıcıya iletir. “Güzel görünsün” işi çoğunlukla CSS’e; “tıklanınca bir şey olsun” işi JavaScript’e kalır. Bu nedenle HTML’de “doğru etiketle doğru içerik” ilkesi ön plandadır.

---

## 3. Konu anlatımı

### 3.1. Belge yapısı (`1.Layout.html`)

`head` içinde başlık (`title`), karakter kodlaması (`charset`) ve arama/sosyal paylaşım için kullanılabilecek `meta` bilgileri yer alır. `body` içinde kullanıcıya görünen içerik bulunur.

### 3.2. Metin ve biçimlendirme (`2`–`4`)

Başlıklar (`h1`–`h6`) belgenin taslak mantığını oluşturur; `h1` genelde sayfa başına bir kez anlamlıdır. Paragraflar (`p`) ve anlamsal olmayan küçük vurgular için uygun etiketler (`strong`, `em` vb.) kullanılır.

### 3.3. Bağlantılar ve medya (`5`, `6`, `9`, `10`)

`a` etiketi `href` ile hedef gösterir. Görsellerde `src` ve açıklayıcı `alt` kullanımı önemlidir. `video` ve `audio` etiketleri modern tarayıcılarda gömülü medya sunar; kaynak formatları ve tarayıcı uyumu ders sırasında tartışılabilir.

### 3.4. Tablolar ve listeler (`7`, `8`)

Tablolar iki boyutlu veri için; erişilebilirlikte başlık hücreleri (`th`) ve başlık–veri ilişkisi önemlidir. Listeler menü, adım veya madde işaretli içerik için kullanılır.

### 3.5. Blok, satır içi, div ve span (`11`, `12`)

Blok elemanlar genelde yeni satırda kutu oluşturur; satır içi elemanlar akış içinde kalır. `div` ve `span` genel kapsayıcılardır; anlamsal etiket (`article`, `nav` vb.) mümkünse tercih edilir (bu modülde temel odak genel kapsayıcılardır).

### 3.6. Kimlik, sınıf ve yer imi (`13`, `14`)

`id` belgede benzersiz olmalıdır. `class` birden fazla elemana verilebilir. Sayfa içi bağlantılar (bookmark) uzun sayfalarda gezinmeyi kolaylaştırır.

### 3.7. Formlar (`15`)

`form`, `input`, `textarea`, `select` ile kullanıcı verisi toplanır. Sunucuya gönderim (`action`, `method`) ve doğrulama ileri düzey konulardır; burada eleman tanıma ve isimlendirme ön plandadır.

---

## 4. Dosya rehberi (ders sırası önerisi)

| Sıra | Dosya | Odak |
|------|--------|------|
| 1 | `1.Layout.html` | İskelet, meta, yorum |
| 2 | `2.Heading-Paragraph.html` | Başlık ve paragraf |
| 3 | `3.Styling.html` | Satır içi stil |
| 4 | `4.Formatting.html` | Metin vurguları |
| 5 | `5.Links.html` | Bağlantılar |
| 6 | `6.Images.html` | Görseller, `alt` |
| 7 | `7.Tables.html` | Tablolar |
| 8 | `8.Lists.html` | Listeler |
| 9 | `9.Videos.html` | Video |
| 10 | `10.Audios.html` | Ses |
| 11 | `11.Block-Inline.html` | Görüntüleme modeli girişi |
| 12 | `12.Div-Span.html` | Kapsayıcılar |
| 13 | `13.Id-Class.html` | `id` / `class` |
| 14 | `14.Link-Bookmark.html` | Sayfa içi link |
| 15 | `15.Forms.html` | Formlar |

**Medya klasörleri:** [images/EGITIM.md](images/EGITIM.md), [audios/EGITIM.md](audios/EGITIM.md)

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Öznitelik (attribute) | Etikete ek bilgi (`href`, `class` vb.) |
| Anlamsal HTML | İçeriğin anlamını taşıyan etiket seçimi |
| Erişilebilirlik | Engelsiz kullanım için yapı ve `alt` vb. |

---

## 6. Yaygın hatalar

- `meta` veya diğer etiketlerde tırnak/parantez hataları (örnek dosyalarda da kontrol edin).  
- `h` sırasını atlamak (ör. `h1` sonra doğrudan `h4`) anlam hiyerarşisini zayıflatır.  
- Görselde `alt` unutmak veya anlamsız bırakmak.

---

## 7. Kendini değerlendirme

1. `id` aynı sayfada iki elemana verilirse ne tür sorunlar beklenir?  
2. `strong` ile `b` arasındaki farkı anlamsal açıdan nasıl açıklarsınız?  
3. Formda `name` özniteliği neden önemlidir?

---

## 8. Uygulamalı çalışma

- `15.Forms.html` içine yeni bir metin alanı ekleyip etiketle ilişkilendirin (`label for` / `id`).  
- `14.Link-Bookmark.html` benzeri küçük tek sayfalık bir içindekiler oluşturun.

---

## 9. Sonraki modül

[Görünüm ve yerleşim: CSS3 TUTORIAL ders notları](../CSS3%20TUTORIAL/EGITIM.md)
