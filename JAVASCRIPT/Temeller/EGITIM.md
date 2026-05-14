# Ders Notu — JavaScript Temeller (Modül Özeti)

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Değişkenler, tipler, dizgeler, diziler, nesneler, tarih, koşullar, fonksiyonlar, döngüler, `window` |
| **Kimler için?** | Programlamaya yeni veya JS’e yeni başlayan öğrenciler |
| **Ön bilgi** | [JavaScript genel çerçeve](../EGITIM.md) |
| **Tahmini çalışma** | Alt ders başına 45–90 dakika |

---

## 1. Kazanımlar

Modül sonunda:

- `var` / `let` / `const` ayrımını gerekçelendirebilirsiniz.  
- Tür dönüşümlerinin neden gerekli olduğunu form örnekleriyle ilişkilendirebilirsiniz.  
- Dizi ve nesne ile veri gruplandırabilir, fonksiyon ile tekrar kullanılabilir kod yazabilirsiniz.  
- Döngü ve koşulla akış kontrol edebilirsiniz.  
- Tarayıcıda `window` ve temel diyalog/zamanlayıcı API’lerine aşinasınız.

---

## 2. Giriş

JavaScript **dinamik tipli** bir dildir; çalışma anında türler esneyebilir. Bu modül, konsol çıktılarıyla dilin “cümle yapısını” öğrenmeniz için düzenlenmiştir. Her alt klasör bağımsız küçük bir laboratuvar gibidir.

---

## 3. Ders sırası ve bağlantılar

| Sıra | Ders notu | Konu |
|------|-----------|------|
| 1 | [1.degisken_tanimlama](1.degisken_tanimlama/EGITIM.md) | İlk değişkenler |
| 2 | [2.var-let-const](2.var-let-const/EGITIM.md) | Kapsam ve sabitlik |
| 3 | [3.tip_donusumleri](3.tip_donusumleri/EGITIM.md) | Tür çevrimi |
| 4 | [4.strings](4.strings/EGITIM.md) | Dizgeler |
| 5 | [5.string_yeni](5.string_yeni/EGITIM.md) | Şablon dizgeler |
| 6 | [6.arrays](6.arrays/EGITIM.md) | Diziler |
| 7 | [7.object_literal](7.object_literal/EGITIM.md) | Nesne sabiti |
| 8 | [8.date_object](8.date_object/EGITIM.md) | Tarih nesnesi |
| 9 | [9.kosul_durumlari](9.kosul_durumlari/EGITIM.md) | Koşullar |
| 10 | [10.functions](10.functions/EGITIM.md) | Fonksiyonlar |
| 11 | [11.loops](11.loops/EGITIM.md) | Döngüler |
| 12 | [12.window](12.window/EGITIM.md) | `window` ve tarayıcı API |

---

## 4. Ortak dosya yapısı

Çoğu derste **`index.html`** betiği yükler, **`app.js`** örnek kodu içerir. Tarayıcı konsolu zorunlu araçtır.

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| İfade | Değer üreten kod parçası |
| İfade / bildirim | Fonksiyon bildirimi vs. ifadesi farkı (10. derste) |
| Truthy/Falsy | Koşullarda dolaylı boolean yorumu |

---

## 6. Dikkat noktaları

- `return` sonrası satırlar çalışmaz (10. ders).  
- `Date` ve saat dilimleri kafa karıştırıcı olabilir; üretimde ihtiyaç halinde kütüphane düşünülür.

---

## 7. Kendini değerlendirme

1. `let` ile `var` aynı blok içinde nasıl farklı davranır?  
2. `const` ile tanımlanan nesnenin özelliği değiştirilebilir mi?

---

## 8. Uygulamalı çalışma

Her alt derste `app.js` içine kendi `console.log` denemenizi ekleyin.

---

## 9. Sonraki modül

[DOM manipülasyonu ders notları](../Dom_Manipilasyonu/EGITIM.md)
