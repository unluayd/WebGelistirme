# Ders Notu — Dinamik Manipülasyon ve Olay Fazları

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | Dinamik arayüzde `e.target` ile hedef ayırt etme; olay yakalama (capture) fazı |
| **Ön bilgi** | [8. Eleman değiştirme](../8.dinamik_element_deg/EGITIM.md), [DOM olayları modülü](../../Dom_Eventleri/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- Üst kapsayıcıda tek dinleyici ile alt öğelerdeki etkileşimi yönetmek.  
- `e.target` ile gerçek tıklanan elemanı okumak.  
- `addEventListener(..., true)` ile **capture** fazında dinlemek.

---

## 2. Giriş

Liste veya kartlarda her satıra ayrı `click` dinleyicisi eklemek mümkündür; ancak çok sayıda öğede **bellek** ve **bakım** maliyeti doğar. Üst elemanda bir dinleyici ve `e.target` kontrolü (olay delegasyonu) sık kullanılır. Capture fazı, olayın hedefe inmeden önce üstlerden geçtiği aşamadır.

---

## 3. Konu anlatımı

### 3.1. Hedef kontrolü

Örnek: kart gövdesine tıklanınca, yalnızca belirli bir simge sınıfına sahipse “sil” işlemi tetiklensin. `e.target` gerçek kaynağı gösterir; `currentTarget` dinleyicinin bağlandığı elemandır.

### 3.2. Capture parametresi

Üçüncü argüman `true` olduğunda dinleyici önce yakalama fazında çalışır. Bu, üst seviyede olayı erken kesmek veya özel sıralama için kullanılabilir.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Capture dinleyicisi, `e.target` ile sınıf kontrolü |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Delegasyon | Üstte toplu dinleme |
| Capture | Hedefe inen faz |
| Bubble | Hedefden yukarı çıkan faz |

---

## 6. Dikkat noktaları

`className` tam dizge karşılaştırması kırılgandır; `classList.contains` tercih edilebilir.

---

## 7. Kendini değerlendirme

`currentTarget` ile `target` ne zaman farklıdır?

---

## 8. Uygulamalı çalışma

Bir `ul` üzerinde tek `click` dinleyicisi ile hangi `li`’nin tıklandığını `closest("li")` veya `target` ile bulun.

---

## 9. Sonraki modül

[DOM olayları](../../Dom_Eventleri/EGITIM.md)
