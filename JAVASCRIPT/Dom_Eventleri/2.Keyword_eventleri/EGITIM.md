# Ders Notu — Klavye Olayları

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | `keydown`, `keyup` ve tuş bilgisi okuma |
| **Ön bilgi** | [1. Olay nesnesi](../1.Event_Objesi/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- Klavye olaylarını dinlemek.  
- `key` / `code` kavramlarına aşinalık.  
- Erişilebilirlik: yalnızca fareye bağlı olmama.

---

## 2. Giriş

Klasör adı **Keyword** olarak yazılmıştır; eğitim konusu **klavye (keyboard)** olaylarıdır. Kısayollar, oyun kontrolleri, formda Enter ile gönderim gibi senaryolarda klavye olayları kullanılır.

---

## 3. Konu anlatımı

### 3.1. Olay türleri

`keydown` tuşa basıldığında; `keyup` bırakıldığında tetiklenir. Tekrarlayan `keydown` (basılı tutma) davranışını göz önünde bulundurun.

### 3.2. Varsayılanı engelleme

Bazı tuşlar için `preventDefault` ile tarayıcı kısayolunu bastırmak mümkündür; dikkatli ve nadir kullanılmalıdır.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Klavye dinleyicileri ve örnek çıktılar |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Odak (focus) | Klavye olaylarının çoğu odaklı elemana gider |

---

## 6. Dikkat noktaları

Erişilebilirlik: tüm işlevlerin klavye ile de yapılabildiğinden emin olun.

---

## 7. Kendini değerlendirme

`key` ile `code` farkını kendi cümlelerinizle yazın.

---

## 8. Uygulamalı çalışma

Bir metin kutusunda Escape tuşuna basıldığında içeriği temizleyin.

---

## 9. Sonraki ders

[3. Fare olayları](../3.Mause_eventleri/EGITIM.md)
