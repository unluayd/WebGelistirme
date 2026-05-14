# Ders Notu — Dinamik Eleman Ekleme

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | `createElement`, metin düğümü ve `appendChild` |
| **Ön bilgi** | [5. Gezinme](../5.dom_elem_gezinme/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- Programatik olarak yeni eleman üretmek.  
- Öznitelik ve sınıf atayıp ağaca bağlamak.  
- `appendChild` ile ebeveyn–çocuk ilişkisi kurmak.

---

## 2. Giriş

Sunucudan JSON gelmeden önce bile istemci tarafında yeni liste satırı, uyarı kutusu veya bağlantı eklemek için **DOM oluşturma** gerekir. Bu, tek sayfa uygulamalarının temelidir.

---

## 3. Konu anlatımı

### 3.1. Oluşturma akışı

1. `document.createElement("a")`  
2. Öznitelikler: `href`, `className`, `id`  
3. Metin: `createTextNode` veya `textContent`  
4. `ebeveyn.appendChild(cocuk)`

### 3.2. Performans

Çok sayıda eklemede belge parçası (`DocumentFragment`) ileri optimizasyon olarak düşünülebilir.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Örnek: kart gövdesine yeni bağlantı ekleme |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Düğüm ekleme | Ağaçta yeni dal oluşturma |

---

## 6. Dikkat noktaları

Aynı düğümü iki ebeveyne ekleyemezsiniz; taşınır (move).

---

## 7. Kendini değerlendirme

`innerHTML +=` ile `createElement` yaklaşımı arasında güvenlik ve performans açısından farklar?

---

## 8. Uygulamalı çalışma

Liste sonuna programatik `li` ekleyin; içinde metin ve küçük bir `button` olsun.

---

## 9. Sonraki ders

[7. Dinamik eleman silme](../7.dinamik_element_silme/EGITIM.md)
