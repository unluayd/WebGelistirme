# Ders Notu — Paylaşılan Stil Dosyası (`style.css`)

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Ortak CSS dosyasının projedeki yeri ve kullanımı |
| **Kimler için?** | CSS3 TUTORIAL örneklerinde harici stil bağlayan öğrenciler |
| **Ön bilgi** | [CSS3 TUTORIAL çerçeve notu](../EGITIM.md) |

---

## 1. Kazanımlar

- Harici CSS bağlamanın HTML içinde nasıl yazıldığını göstermek.
- Tekrarlayan kuralları tek dosyada toplamanın bakım faydasını açıklamak.

---

## 2. Giriş

Küçük örneklerde stil bazen `style` etiketiyle aynı dosyada kalır. Büyüyen projelerde **harici `.css` dosyası**, aynı görünümü çok sayfada paylaşmayı ve önbellekleme ile performansı iyileştirir.

---

## 3. Konu anlatımı

### 3.1. Bağlantı

```html
<link rel="stylesheet" href="../css/style.css" />
```

`href` yolu, HTML dosyasının bulunduğu klasöre göre ayarlanır.

### 3.2. Ayrıştırma

Yapı (HTML), görünüm (CSS) ve davranış (JS) ayrıldığında ekip çalışması ve hata ayıklama kolaylaşır.

---

## 4. Bu klasördeki dosya

**`style.css`** — Örnekler arasında paylaşılabilecek genel kurallar.

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Göreli yol | Bağlantı veren dosyaya göre adres |

---

## 6. Dikkat noktaları

Yol yanlışsa stil hiç uygulanmaz; geliştirici araçlarında “Network” sekmesinden 404 kontrolü yapın.

---

## 7. Kendini değerlendirme

Harici dosyayı değiştirdiğinizde tüm bağlı sayfalar nasıl etkilenir?

---

## 8. Uygulamalı çalışma

`style.css` içine tek bir sınıf ekleyip farklı bir HTML dosyasından çağırın.

---

## 9. İlgili not

[CSS3 TUTORIAL çerçeve notu](../EGITIM.md)
