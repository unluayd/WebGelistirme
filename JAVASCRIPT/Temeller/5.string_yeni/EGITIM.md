# Ders Notu — JavaScript Temeller 5: Şablon Dizgeler (Template Literals)

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Backtick (\`) ile interpolasyon ve çok satırlı dizgeler |
| **Ön bilgi** | [Ders 4](../4.strings/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- `` `${ifade}` `` ile değer gömmek.  
- Çok satırlı metni kaçış karmaşası olmadan yazmak.

---

## 2. Giriş

Şablon dizgeler, ES6 ile yaygınlaştı. Okunabilir log ve kullanıcı mesajları için `+` birleştirmesine üstün gelir.

---

## 3. Konu anlatımı

### 3.1. Sözdizimi

```javascript
const mesaj = `Merhaba ${ad}, yaş: ${yas}`;
```

### 3.2. İfadeler

`${}` içinde herhangi bir ifade çalışır; dikkatli olunmalı (yan etki yoksa daha iyidir).

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Şablon örnekleri |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Interpolasyon | Dizge içine ifade yerleştirme |
| Backtick | `` ` `` karakteri |

---

## 6. Dikkat noktaları

Şablon dizge etiketli (tagged template) ileri kullanım bu derste gerekmez.

---

## 7. Kendini değerlendirme

Şablonda `${2 + 3}` ne üretir?

---

## 8. Uygulamalı çalışma

HTML parçası üretmek için şablon kullanın (üretimde XSS riskine dikkat).

---

## 9. Sonraki ders

[6. Diziler](../6.arrays/EGITIM.md)
