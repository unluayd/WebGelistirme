# Ders Notu — Session Storage

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | `sessionStorage` API’si ile geçici veri saklama |
| **Ön bilgi** | [Depolama modülü](../EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- Anahtar–değer ekleme, silme ve temizleme.  
- Sekme kapanınca verinin kaybolması beklentisini açıklamak.

---

## 2. Giriş

**Session storage**, “bu sekmede çalışırken hatırla” senaryoları içindir: geçici form taslakları, sihirbaz adımı, oyun oturumu gibi. Kalıcı tercih için `localStorage` uygundur.

---

## 3. Konu anlatımı

### 3.1. Temel işlemler

- `sessionStorage.setItem(key, value)`  
- `sessionStorage.getItem(key)`  
- `sessionStorage.removeItem(key)`  
- `sessionStorage.clear()`

### 3.2. Olay dinleyicileri

`app.js` içinde düğmelere bağlı işlevlerle kullanıcı etkileşimi sağlanır.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `index.html` | Girdi alanları ve düğmeler |
| `app.js` | Depolama işlemleri |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Anahtar | Dizge; benzersiz tanımlayıcı |
| Değer | Saklanan dizge |

---

## 6. Dikkat noktaları

Aynı anahtara `setItem` ikinci kez çağrılırsa değer üzerine yazılır.

---

## 7. Kendini değerlendirme

`getItem` var olmayan anahtarda ne döner?

---

## 8. Uygulamalı çalışma

Sayfa yenileyince hâlâ duran bir değer `sessionStorage`’da kalır mı? Deneyip gözlemleyin.

---

## 9. Sonraki ders

[2. Local Storage](../2.local_storage/EGITIM.md)
