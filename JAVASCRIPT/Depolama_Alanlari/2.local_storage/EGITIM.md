# Ders Notu — Local Storage

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | `localStorage` ile kalıcı istemci tarafı depolama |
| **Ön bilgi** | [Session Storage dersi](../1.Session_storage/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- `localStorage` ile verinin tarayıcı kapansa da (aynı sitede) kalması.  
- Nesne saklamak için serileştirme düşüncesi.

---

## 2. Giriş

**Local storage**, tema rengi, dil seçimi, son açılan sekmeler gibi **kalıcı tercihler** için uygundur. Sunucuya her istekte otomatik gönderilmez (çerezden fark); JavaScript ile okunur/yazılır.

---

## 3. Konu anlatımı

### 3.1. API

`sessionStorage` ile aynı metot isimleri; fark ömür ve kapsamdadır.

### 3.2. Nesne saklama

```javascript
localStorage.setItem("user", JSON.stringify({ name: "Ayşe" }));
const u = JSON.parse(localStorage.getItem("user") || "{}");
```

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `index.html` | Arayüz |
| `app.js` | `localStorage` işlemleri |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Serileştirme | Nesneyi dizgeye çevirme |
| JSON | Veri değişim formatı |

---

## 6. Dikkat noktaları

- Kota dolduğunda `setItem` hata fırlatabilir (`try/catch` ile ele alınabilir).  
- Kullanıcı veriyi tarayıcı ayarlarından silebilir.

---

## 7. Kendini değerlendirme

`localStorage` verisi farklı alt alan adları (subdomain) arasında paylaşılır mı?

---

## 8. Uygulamalı çalışma

Basit bir ayar objesini JSON olarak kaydedip sayfayı yenileyerek geri okuyun.

---

## 9. Modül özeti

[Depolama modülü ana notu](../EGITIM.md)
