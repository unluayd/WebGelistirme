# Ders Notu — JavaScript Temeller 2: var, let ve const

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Üç anahtar kelimenin kapsam ve yeniden atama açısından farkları |
| **Ön bilgi** | [Ders 1](../1.degisken_tanimlama/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- Blok kapsamı (`let`/`const`) ile fonksiyon kapsamı (`var`) farkı.  
- `const` ile sabit bağlama; nesne içeriği konusunda dikkat.

---

## 2. Giriş

Modern JavaScript’te varsayılan tercih genelde **`const`** (değişmeyecek bağlantı), gerektiğinde **`let`**, **`var`** ise eski kod ve özel durumlar içindir.

---

## 3. Konu anlatımı

### 3.1. let

Aynı blok içinde yeniden `let` ile bildirim hata verir; değer güncellemesi `=` ile yapılır.

### 3.2. const

Aynı isme yeniden atama yasaktır; ancak nesnenin özellikleri değiştirilebilir (referans sabittir).

### 3.3. var

Döngü içinde `var` ile beklenmedik paylaşılan değişken örnekleri sık görülür; `let` genelde daha sezgiseldir.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Davranış karşılaştırmaları |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Kapsam | Değişkenin görüldüğü kod bölgesi |
| Hoisting | `var` bildiriminin özel yükseltilmesi (ileri okuma) |

---

## 6. Dikkat noktaları

Global değişken kirliliği bakım ve testleri zorlaştırır.

---

## 7. Kendini değerlendirme

`const arr = []; arr.push(1);` geçerli midir, neden?

---

## 8. Uygulamalı çalışma

Aynı isimle `let`’i iç içe bloklarda deneyin; konsol hatasını okuyun.

---

## 9. Sonraki ders

[3. Tip dönüşümleri](../3.tip_donusumleri/EGITIM.md)
