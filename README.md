# Ders Notu — Web Eğitim Projesi (Genel Çerçeve)

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Bu deponun yapısı, modüller arası ilişki ve önerilen öğrenme yolu |
| **Kimler için?** | HTML, CSS, Bootstrap ve JavaScript öğrenen başlangıç–orta seviye öğrenciler |
| **Ön bilgi** | Bilgisayar kullanımı; metin düzenleyici ve tarayıcı açabilme yeterlidir |

---

## 1. Bu ünitede kazanımlarınız

Bu notu okuduktan sonra şunları yapabilmeniz hedeflenir:

- Projedeki dört ana modülün (HTML5, CSS3, Bootstrap, JavaScript) rolünü bir cümleyle ifade etmek.
- Öğrenme sırasını gerekçelendirmek (içerik → stil → bileşen çerçevesi → etkileşim).
- Her modülün klasöründeki `EGITIM.md` dosyasının ders notu niteliğinde olduğunu ve nasıl kullanılacağını açıklamak.

---

## 2. Giriş: Bu proje ne işe yarar?

Bu depo, yalnızca “slayt” veya teori sunmak yerine **çalışan örnek dosyalar** üzerinden ilerlemeniz için düzenlenmiştir. Her konu klasöründe tarayıcıda açabileceğiniz HTML/JS dosyaları ve aynı klasörde **ders notu** (`EGITIM.md`) bulunur. Notlar; kazanım, anlatım, dosya rehberi, dikkat noktaları ve kendini kontrol soruları içerir.

---

## 3. Modüllerin rolleri

### 3.1. HTML5

Sayfanın **anlam ve yapı** katmanıdır. Başlıklar, paragraflar, listeler, bağlantılar, medya ve formlar burada tanımlanır. Stil veya davranıştan önce “ne var?” sorusunun cevabıdır.

### 3.2. CSS3 TUTORIAL

**Görünüm ve yerleşim** katmanıdır. Renk, yazı, boşluk, konumlandırma, Flexbox ve duyarlı (responsive) kurallar bu modülde işlenir.

### 3.3. Bootstrap

Hazır **sınıf tabanlı** bileşenler ve **ızgara (grid)** sistemi sunar. CSS bilgisi olmadan da hızlı prototip üretmeyi sağlar; ancak alttaki HTML/CSS anlayışı öğrenmeyi hızlandırır.

### 3.4. JavaScript

Sayfayı **dinamik** hale getirir: DOM ile elemanları seçip değiştirmek, olay dinlemek, tarayıcıda veri saklamak. Bu modül kendi içinde Temeller → DOM → Olaylar → Depolama sırasına yakın ilerler.

---

## 4. Önerilen çalışma sırası (ders planı)

1. **HTML5** — İskelet ve içerik işaretleme  
2. **CSS3 TUTORIAL** — Stil ve düzen  
3. **BOOTSTRAP** — Bileşen ve grid pratiği  
4. **JAVASCRIPT** — Etkileşim ve istemci mantığı  

Bu sıra, “önce neyin var olduğunu” sonra “nasıl göründüğünü” ve en sonda “nasıl davrandığını” öğrenmenize uyar.

---

## 5. Modül ders notlarına bağlantılar

| Modül | Ders notu dosyası |
|--------|-------------------|
| HTML5 | [HTML5/EGITIM.md](HTML5/EGITIM.md) |
| CSS3 TUTORIAL | [CSS3 TUTORIAL/EGITIM.md](CSS3%20TUTORIAL/EGITIM.md) |
| Bootstrap | [BOOTSTRAP/EGITIM.md](BOOTSTRAP/EGITIM.md) |
| JavaScript | [JAVASCRIPT/EGITIM.md](JAVASCRIPT/EGITIM.md) |

---

## 6. Önemli terimler (özet)

| Terim | Kısa açıklama |
|--------|----------------|
| DOM | HTML belgesinin tarayıcıdaki ağaç yapısı |
| CDN | İçerik dağıtım ağı; Bootstrap gibi kütüphanelerin uzak sunucudan bağlanması |
| İstemci tarafı | Kodun kullanıcının tarayıcısında çalışması |

---

## 7. Dikkat edilmesi gerekenler

- **`JAVASCRIPT/Todo_List_Project`** klasörü bu eğitim notları setinin dışında bırakılmıştır; genel müfredat notları bu klasöre yazılmamıştır.
- Dosya yollarında Türkçe karakter veya boşluk olmayan klasör adları tercih edilir; `CSS3 TUTORIAL` gibi isimlerde bağlantılarda kodlama (`%20`) gerekebilir.

---

## 8. Kendini değerlendirme

1. Neden JavaScript’e geçmeden önce HTML ve CSS çalışılması önerilir?  
2. Bootstrap, saf CSS’in yerini tamamen alır mı? Gerekçeniz nedir?  
3. Bu projede teoriyi nerede, uygulamayı nerede bulursunuz?

---

## 9. Uygulamalı çalışma

Her modülün ilk ders notunu okuyup **bir örnek dosyayı** tarayıcıda açın; nottaki “dosya rehberi” bölümünden bir dosya seçip geliştirici araçlarında (F12) HTML/CSS yapısını inceleyin.

---

## 10. Sonraki adım

[HTML5 modül ders notlarına](HTML5/EGITIM.md) geçerek içerik işaretlemeye başlayın.
