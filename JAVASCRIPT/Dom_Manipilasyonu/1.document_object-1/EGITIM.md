# Ders Notu — document Nesnesi

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | `document` ile belge ve konum bilgisine erişim |
| **Ön bilgi** | [DOM manipülasyonu modülü](../EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- `document.head`, `document.body`, `document.documentElement` gibi giriş noktaları.  
- `URL`, `characterSet`, `contentType` gibi meta bilgiler.  
- `location` alt alanları (`href`, `hostname`, `search`, `hash`).  
- `document.all` gibi eski yapılara dair farkındalık (modern kodda `querySelector` tercih edilir).

---

## 2. Giriş

**document**, tarayıcıda yüklü HTML belgesinin kök arayüzüdür. DOM modülünde seçim ve değişiklik yapmadan önce “belgeyi tanıma” adımıdır.

---

## 3. Konu anlatımı

### 3.1. Yapısal parçalar

`head` meta ve betikleri; `body` görünen içeriği taşır.

### 3.2. Konum (location)

Sorgu dizgisi (`?`) ve parça (`#`) yönlendirme ve tek sayfa uygulamalarında sık kullanılır.

### 3.3. `document.all`

Geçmişle uyumluluk kalıntısıdır; dizi benzeri koleksiyon; `Array.from` ile dolaşılabilir.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Özelliklerin atanması ve `console.log` |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| DOM | Belgenin nesne ağacı |
| URL | Belgenin tam adresi |

---

## 6. Dikkat noktaları

`document.write` eski kalıptır; modern uygulamalarda kaçınılır.

---

## 7. Kendini değerlendirme

`location.search` ne zaman boş dizge olur?

---

## 8. Uygulamalı çalışma

Adres çubuğuna `?test=1` ekleyip `search` değerini konsola yazdırın.

---

## 9. Sonraki ders

[3. Eleman seçme](../3.element_secme/EGITIM.md)
