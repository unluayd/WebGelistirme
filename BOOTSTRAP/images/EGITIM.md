# Ders Notu — Bootstrap Modülü: Görseller Klasörü

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Eğitim HTML dosyalarında kullanılan görsel varlıkların organizasyonu |
| **Kimler için?** | Bootstrap örneklerini çalıştıran tüm öğrenciler |
| **Ön bilgi** | [Bootstrap modül ders notu](../EGITIM.md) |

---

## 1. Kazanımlar

- Görselleri HTML’den ayrı bir klasörde tutmanın bakım ve taşınabilirlik faydasını açıklamak.
- `img` veya CSS `url()` ile **göreli yol** kullanımını doğru kurmak.

---

## 2. Giriş

Web projelerinde görseller genelde `images`, `img` veya `assets` gibi alt klasörlerde durur. Böylece HTML dosyası sade kalır, dosya yönetimi kolaylaşır ve aynı görsel birden fazla sayfada tutarlı yolla çağrılır.

---

## 3. Konu anlatımı

### 3.1. Göreli yol

`BOOTSTRAP` klasöründeki bir HTML dosyası bu klasöre `images/ornek.jpg` gibi bir yolla erişebilir. Dosyanın hangi klasörde olduğuna göre `../` kullanımı değişir.

### 3.2. Erişilebilirlik

Görseller için HTML tarafında anlamlı `alt` metni yazmak, ekran okuyucular ve kırık bağlantı durumları için önemlidir.

### 3.3. Performans

Çok büyük dosyalar sayfa yükünü artırır. Eğitimde basit tutulur; gerçek projede sıkıştırma ve uygun boyut seçimi yapılır.

---

## 4. Bu klasörde ne var?

Bu klasör, Bootstrap ders dosyalarına bağlı **medya dosyalarını** barındırır. Tek başına “çalıştırılabilir” bir ders dosyası içermez; üst klasördeki HTML örnekleriyle birlikte anlam kazanır.

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Varlık (asset) | Sayfaya eklenen görsel, ses, video dosyası |
| Göreli yol | Mevcut dosyaya göre verilen adres |

---

## 6. Dikkat noktaları

- Dosya adında Türkçe karakter veya boşluk kullanmak bazı sunucularda sorun çıkarabilir.  
- Büyük/küçük harf duyarlılığı (özellikle Linux sunucularda) unutulmamalıdır.

---

## 7. Kendini değerlendirme

1. HTML dosyanız bir alt klasöre taşınsa görsel yolunu nasıl güncellersiniz?  
2. `alt` boş bırakıldığında ne tür erişilebilirlik sorunu oluşur?

---

## 8. Uygulamalı çalışma

Üst klasördeki bir HTML dosyasında görsel yolunu bilinçli olarak yanlış yazıp tarayıcıda kırık görseli gözlemleyin; ardından doğru göreli yola düzeltin.

---

## 9. İlgili not

[Bootstrap modül ders notu](../EGITIM.md)
