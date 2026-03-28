# Ders Notu — Tarayıcı Depolama Alanları (Web Storage)

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | `sessionStorage` ve `localStorage` ile anahtar–değer saklama |
| **Ön bilgi** | [JavaScript genel](../EGITIM.md), [DOM ve olaylar](../Dom_Eventleri/EGITIM.md) önerilir |
| **Materyaller** | Alt klasörlerde `index.html`, `app.js` |

---

## 1. Kazanımlar

- İki depolama türünün **ömür** ve **kapsam** farkını açıklamak.  
- `setItem`, `getItem`, `removeItem`, `clear` kullanımı.  
- Nesne saklarken `JSON.stringify` / `parse` ihtiyacını bilmek.  
- Güvenlik ve kota sınırlarına dair temel farkındalık.

---

## 2. Giriş

HTTP **durumsuz** çalışır; sayfa yenilense bile bazı verileri istemcide tutmak isteyebilirsiniz (tercihler, taslaklar). Web Storage API, çerezlere göre daha geniş ve kullanımı daha basit bir anahtar–değer alanı sunar (ancak her senaryo için uygun değildir).

---

## 3. Konu anlatımı

### 3.1. Ortak API

Tüm değerler **dizge** olarak saklanır. Sayı veya nesne için çevirim sizin sorumluluğunuzdadır.

### 3.2. sessionStorage

Sekme oturumu ile ilişkilidir; sekme kapatılınca veriler tipik olarak gider.

### 3.3. localStorage

Aynı köken (origin) için kalıcıdır; kullanıcı veya tarayıcı temizlemedikçe kalır.

### 3.4. Güvenlik

XSS varsa depodaki veriler okunabilir. Hassas token/şifre saklamak uygun değildir.

---

## 4. Alt ders notları

| Ders | Bağlantı |
|------|----------|
| Session Storage | [1.Session_storage/EGITIM.md](1.Session_storage/EGITIM.md) |
| Local Storage | [2.local_storage/EGITIM.md](2.local_storage/EGITIM.md) |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Origin | Şema + host + port birliği |
| Kota | Tarayıcının izin verdiği depolama üst sınırı |

---

## 6. Dikkat noktaları

- Depolama olayları (`storage` event) başka sekmelerle senkron için kullanılabilir (ileri konu).  
- Gizli modda davranış farklılıkları olabilir.

---

## 7. Kendini değerlendirme

1. Oturum çerezi ile `sessionStorage` aynı şey midir?  
2. 5 MB’a yakın veriyi depoda tutmak neden sorun olabilir?

---

## 8. Uygulamalı çalışma

Basit bir “ziyaret sayacı”yı `localStorage` ile tutun (sayfa her açıldığında artırın).

---

## 9. Önceki modül

[DOM olayları](../Dom_Eventleri/EGITIM.md)
