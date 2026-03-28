# Ders Notu — Eleman Seçme

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | `getElementById`, `getElementsBy*`, `querySelector`, `querySelectorAll` |
| **Ön bilgi** | [1. document nesnesi](../1.document_object-1/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js`, `css/` (Font Awesome ve yerel fontlar) |

---

## 1. Kazanımlar

- Kimlik ile tek eleman seçme.  
- Sınıf ve etiket ile koleksiyon alma.  
- CSS seçicisi ile esnek hedefleme.  
- Canlı vs. statik koleksiyon farkına dair farkındalık.

---

## 2. Giriş

DOM’da değişiklik yapmadan önce **doğru düğümü bulmak** gerekir. Eski API’ler (`getElementsByClassName`) ve modern olanlar (`querySelector`) birlikte öğrenilir çünkü gerçek kod tabanlarında ikisi de görülür.

---

## 3. Konu anlatımı

### 3.1. `getElementById`

En hızlı ve en sık kullanılan yollardan biri; `id` belgede benzersiz olmalıdır.

### 3.2. `getElementsByClassName` / `getElementsByTagName`

**Canlı** HTMLCollection dönebilir; döngü sırasında DOM değişirse sürpriz yaşanabilir.

### 3.3. `querySelector` / `querySelectorAll`

CSS seçicisi yazım gücü sunar. `querySelectorAll` **statik** NodeList verir.

---

## 4. Dosya rehberi

| Dosya / klasör | Rol |
|----------------|-----|
| `index.html` | Todo benzeri yapı, çoklu `li` |
| `app.js` | Seçim örnekleri |
| `css/` | [Stil varlıkları](css/EGITIM.md) |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Seçici | Elemanı tanımlayan desen |
| NodeList | Düğüm listesi; `forEach` desteği ortamına göre |

---

## 6. Dikkat noktaları

`querySelector` ilk eşleşeni döner; birden fazla öğe için `querySelectorAll` kullanın.

---

## 7. Kendini değerlendirme

`.list-group-item` sınıfına sahip üçüncü öğeyi nasıl seçersiniz?

---

## 8. Uygulamalı çalışma

`querySelectorAll` sonucunu `forEach` ile dolaşıp metin içeriğini konsola yazdırın.

---

## 9. Sonraki ders

[4. Eleman özelliklerini değiştirme](../4.element_ozellik_deg/EGITIM.md)
