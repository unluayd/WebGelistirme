# Ders Notu — JavaScript Temeller 7: Nesne Sabiti (Object Literal)

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Özellik–değer çiftleri, nokta ve köşeli parantez notasyonu |
| **Ön bilgi** | [Ders 6](../6.arrays/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- `{ }` ile nesne oluşturma.  
- `obj.x` ve `obj["x"]` erişimi.  
- JSON benzeri veri yapılarına hazırlık.

---

## 2. Giriş

Nesne, isimlendirilmiş özelliklerden oluşur. API yanıtları ve yapılandırma verileri sıkça nesne (ve dizi) olarak temsil edilir.

---

## 3. Konu anlatımı

### 3.1. Özellik erişimi

Dinamik anahtar adı için köşeli parantez zorunludur: `obj[key]`.

### 3.2. İç içe yapı

Özellik değeri başka nesne veya dizi olabilir.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Nesne örnekleri |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Özellik (property) | Anahtar–değer çiftinin anahtarı |
| Referans | Nesnenin değişkende tutulan bağlantısı |

---

## 6. Dikkat noktaları

İki değişken aynı nesneyi paylaşabilir; biri üzerinden yapılan değişiklik diğerinden görülür.

---

## 7. Kendini değerlendirme

`const o = { a: 1 }; o.a = 2;` geçerli midir?

---

## 8. Uygulamalı çalışma

Kullanıcı profili benzeri iç içe bir nesne tanımlayın.

---

## 9. Sonraki ders

[8. Date nesnesi](../8.date_object/EGITIM.md)
