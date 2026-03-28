# Ders Notu — Eleman Özelliklerini Değiştirme

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | `className`, `classList`, `id`, içerik ve satır içi stil |
| **Ön bilgi** | [3. Eleman seçme](../3.element_secme/EGITIM.md) |
| **Materyaller** | `index.html`, `app.js` |

---

## 1. Kazanımlar

- Sınıf ve kimlik atama; `classList` ile parçalı kontrol.  
- `textContent` / `innerHTML` / `innerText` farkını tartışmak.  
- `element.style.*` ile satır içi CSS.

---

## 2. Giriş

Seçilen eleman üzerinde **görünür ve davranışsal** değişiklik yapmak, etkileşimli sayfanın özüdür. Stil için tercihen sınıf değiştirmek; satır içi stil acil durum veya dinamik hesap için kullanılır.

---

## 3. Konu anlatımı

### 3.1. Sınıf listesi

`classList.add`, `remove`, `toggle`, `contains` — tek tek sınıf yönetimi.

### 3.2. İçerik

- `textContent`: ham metin, HTML ayrıştırmaz (genelde daha güvenli).  
- `innerHTML`: HTML işler; kullanıcı girdisi enjekte etmek XSS riski oluşturur.

### 3.3. Satır içi stil

`element.style.marginTop = "50px"` gibi atamalar yüksek özgüllük üretir.

---

## 4. Dosya rehberi

| Dosya | Rol |
|--------|-----|
| `app.js` | Özellik okuma/yazma örnekleri |

---

## 5. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| XSS | Kötü niyetli betiğin sayfaya sokulması |
| Özgüllük | CSS’te kuralın baskınlığı |

---

## 6. Dikkat noktaları

`className` tüm sınıf dizgesini değiştirir; yanlışlıkla diğer sınıfları silebilirsiniz.

---

## 7. Kendini değerlendirme

Buton metnini güncellerken neden `textContent` tercih edilebilir?

---

## 8. Uygulamalı çalışma

Bir düğümün rengini önce `classList.toggle` ile, sonra satır içi stil ile değiştirin; farkı gözlemleyin.

---

## 9. Sonraki ders

[5. DOM’da gezinme](../5.dom_elem_gezinme/EGITIM.md)
