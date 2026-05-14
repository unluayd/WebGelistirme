# Ders Notu — Olay Nesnesi (Event Object)

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Dinleyici geri çağrısındaki `event` nesnesi ve `preventDefault` |
| **Ön bilgi** | [DOM Olayları modülü](../EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- Olay türü ve hedefi hakkında bilgi okumak.  
- Form gönderiminde varsayılan davranışı durdurmak.

---

## 2. Giriş

Tarayıcı olay gerçekleştiğinde, dinleyiciye bir **Event** benzeri nesne iletir. Bu nesne olayın ne olduğunu, nerede başladığını ve bazı olaylarda ek verileri (tuş kodu, koordinat vb.) taşır.

---

## 3. Konu anlatımı

### 3.1. `e.type`

Örneğin `"submit"`, `"click"`.

### 3.2. `e.target`

Olayın hedefi; çoğu zaman doğrudan etkileşilen DOM düğümü.

### 3.3. `e.preventDefault()`

Tarayıcının varsayılan eylemini (ör. formun tam sayfa gönderimi) iptal eder; SPA veya AJAX senaryolarında sıktır.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Form `submit` örneği, konsol çıktıları |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Geri çağrı (callback) | Olay oluşunca çağrılan fonksiyon |
| Varsayılan davranış | Tarayıcının etiket/olay için yaptığı standart işlem |

---

## 6. Dikkat noktaları

`this` kullanımı dinleyicinin bağlandığı şekle göre değişebilir; ok fonksiyonları farklı davranır.

---

## 7. Kendini değerlendirme

`preventDefault` ile `stopPropagation` aynı şey midir?

---

## 8. Uygulamalı çalışma

`submit` dinleyicisinde önce `preventDefault` olmadan, sonra ekleyerek ağ sekmesinde farkı gözlemleyin.

---

## 9. Sonraki ders

[2. Klavye olayları](../2.Keyword_eventleri/EGITIM.md)
