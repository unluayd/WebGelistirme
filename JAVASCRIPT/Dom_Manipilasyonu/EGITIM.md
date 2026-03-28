# Ders Notu — DOM Manipülasyonu

| Alan | Açıklama |
|------|-----------|
| **Dersin konusu** | `document` nesnesi, eleman seçimi, özellik ve içerik değişimi, ağaçta gezinme, dinamik ekleme/silme/değiştirme |
| **Ön bilgi** | [HTML5](../../HTML5/EGITIM.md), [JavaScript Temeller](../Temeller/EGITIM.md) |
| **Not** | Klasör adı **Manipilasyonu** yazımıyla kayıtlıdır; anlam **manipülasyon**dur. Bu projede **2** numaralı alt klasör yoktur; akış **1** sonrası **3** ile devam eder. |

---

## 1. Kazanımlar

- `document` üzerinden belge meta bilgilerine erişim.  
- Klasik ve modern seçicilerle eleman bulma.  
- Sınıf, kimlik, içerik ve satır içi stil güncelleme.  
- Ebeveyn/çocuk ilişkileriyle gezinme.  
- `createElement` / `appendChild` ile yeni düğüm üretme; silme ve değiştirme.  
- Dinamik arayüzde `e.target` ve capture fazına giriş (9. alt ders).

---

## 2. Giriş

HTML belgesi tarayıcıda **DOM ağacı** olarak temsil edilir. JavaScript bu ağacı okuyup değiştirerek sayfayı günceller. Bu modül, “sayfayı programatik olarak kontrol etme” becerisinin omurgasıdır.

---

## 3. Alt ders sırası

| Sıra | Ders notu | Konu |
|------|-----------|------|
| 1 | [1.document_object-1](1.document_object-1/EGITIM.md) | `document` özellikleri |
| 3 | [3.element_secme](3.element_secme/EGITIM.md) | Seçiciler |
| 4 | [4.element_ozellik_deg](4.element_ozellik_deg/EGITIM.md) | Özellik ve içerik |
| 5 | [5.dom_elem_gezinme](5.dom_elem_gezinme/EGITIM.md) | Ağaçta gezinme |
| 6 | [6.dinamik_element_ekleme](6.dinamik_element_ekleme/EGITIM.md) | Yeni eleman |
| 7 | [7.dinamik_element_silme](7.dinamik_element_silme/EGITIM.md) | Eleman silme |
| 8 | [8.dinamik_element_deg](8.dinamik_element_deg/EGITIM.md) | Eleman değiştirme |
| 9 | [9.dinamik_element_man](9.dinamik_element_man/EGITIM.md) | Dinamik UI + capture / `target` |

**Stil desteği:** [3.element_secme/css/EGITIM.md](3.element_secme/css/EGITIM.md)

---

## 4. Önemli terimler

| Terim | Açıklama |
|--------|-----------|
| Düğüm (node) | Ağaçtaki tek bir öğe (eleman veya metin) |
| Canlı NodeList | DOM değişince güncellenen koleksiyon (`getElementsBy*`) |
| Statik NodeList | Anlık görüntü (`querySelectorAll`) |

---

## 5. Dikkat noktaları

- `innerHTML` ile kullanıcı verisi enjekte etmek XSS riskidir; `textContent` daha güvenlidir (içerik HTML gerektirmiyorsa).  
- `querySelectorAll` döngüde cache’lenmeli; her iterasyonda tekrar sorgu pahalıdır.

---

## 6. Kendini değerlendirme

1. `children` ile `childNodes` farkı?  
2. Neden `getElementById` tek eleman, `getElementsByClassName` koleksiyon döner?

---

## 7. Uygulamalı çalışma

Todo benzeri listede yeni `li` oluşturup `appendChild` ile ekleyin; ardından `remove` ile silin.

---

## 8. Sonraki modül

[DOM olayları](../Dom_Eventleri/EGITIM.md)

---

## 9. Önceki modül

[JavaScript Temeller — 12. window](../Temeller/12.window/EGITIM.md)
