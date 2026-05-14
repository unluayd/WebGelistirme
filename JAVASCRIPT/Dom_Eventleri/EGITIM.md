# Ders Notu — DOM Olayları (Events)

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Olay dinleyicileri, olay nesnesi, klavye/fare/girdi olayları, kabarcıklanma |
| **Ön bilgi** | [DOM manipülasyonu](../Dom_Manipilasyonu/EGITIM.md) |
| **Materyaller** | Alt klasörlerde `index.html`, `app.js` |

---

## 1. Kazanımlar

- `addEventListener` ile olay bağlama ve kaldırma fikrine aşinalık.  
- Olay nesnesinden `type`, `target` okuma; `preventDefault`.  
- Klavye, fare ve girdi olaylarının kullanım alanları.  
- Kabarcıklanma (bubbling) ve yakalama (capturing) ayrımına giriş.

---

## 2. Giriş

Statik HTML, kullanıcı tıklayana kadar “ölüdür”. **Olaylar**, etkileşimi mümkün kılar: tıklama, yazma, klavye, yükleme, yeniden boyutlanma… İstemci tarafı programlama, olay odaklı düşünmeyi gerektirir.

---

## 3. Konu anlatımı

### 3.1. Dinleyici kalıbı

```javascript
element.addEventListener("click", function (e) {
  console.log(e.type, e.target);
});
```

### 3.2. Varsayılan davranış

Form gönderiminde sayfa yenilenmesini engellemek için `e.preventDefault()` sık kullanılır.

### 3.3. Yayılım

Olay DOM ağacında yukarı **kabarcıklanır**; üçüncü parametre `true` ile **yakalama** fazında dinlenebilir.

---

## 4. Alt ders notları

| Sıra | Ders notu | Konu |
|------|-----------|------|
| 1 | [1.Event_Objesi](1.Event_Objesi/EGITIM.md) | Olay nesnesi, `submit`, `preventDefault` |
| 2 | [2.Keyword_eventleri](2.Keyword_eventleri/EGITIM.md) | Klavye (klasör adı “Keyword”) |
| 3 | [3.Mause_eventleri](3.Mause_eventleri/EGITIM.md) | Fare (klasör adı “Mause”) |
| 4 | [4.Input_eventleri](4.Input_eventleri/EGITIM.md) | Girdi alanı olayları |
| 5 | [5.Event_bubbling](5.Event_bubbling/EGITIM.md) | Yayılım ve delegasyon zeminı |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Hedef (target) | Olayın doğrudan tetiklendiği eleman |
| Delegasyon | Üst elemanda tek dinleyici ile çok çocuğu yönetme |

---

## 6. Dikkat noktaları

- Çok sayıda dinleyici bellek ve bakım yükü oluşturur; delegasyon bazen iyidir.  
- Ok tuşları ve erişilebilirlik için yalnızca fareye güvenmeyin.

---

## 7. Kendini değerlendirme

1. `stopPropagation` ne zaman gerekebilir?  
2. `submit` olayında `preventDefault` olmazsa ne olur?

---

## 8. Uygulamalı çalışma

Bir `input` için `input` ve `change` olaylarını aynı anda dinleyip farkı konsola yazdırın.

---

## 9. Sonraki modül

[Depolama alanları](../Depolama_Alanlari/EGITIM.md)
