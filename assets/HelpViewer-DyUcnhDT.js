import{R as e,W as t,f as n,p as r,v as i}from"./index-CwWpn2l0.js";var a=t(),o={topics:`Yardım Konuları`,guide:`İstatistik Rehberi`,methods:`Yöntemler ve Formüller`},s=[{id:`start`,section:`topics`,title:`Başlarken: ana pencere`,body:`
QualiStat penceresi yukarıdan aşağıya menü çubuğu, araç çubuğu, sol tarafta gezgin, ortada çıktı bölmesi ve altta çalışma sayfasından oluşur. En altta durum çubuğu etkin sayfayı, seçimi, ondalık ayırıcıyı ve yakınlaştırma oranını gösterir.

## Tipik çalışma akışı
- Veriyi çalışma sayfasına yazın, yapıştırın (Ctrl+V) ya da **Dosya › Aç…** ile yükleyin.
- Menüden bir analiz seçin; diyalogda sütunları ve seçenekleri belirleyip **Tamam**'a basın.
- Sonuç çıktı bölmesinde açılır ve gezginde listelenir. Gerekirse **Yeniden çalıştır** ile ayarları değiştirin.
- Beğendiğiniz çıktıları **Rapora ekle** ile toplayıp **Raporlar › Rapor Oluşturucu…** ile dışa aktarın.
- Çalışmayı **Dosya › Projeyi Kaydet** (Ctrl+S) ile .qsp proje dosyası olarak saklayın.

Herhangi bir komutu adıyla bulmak için **Ctrl+K** komut paletini kullanın.`},{id:`worksheet`,section:`topics`,title:`Çalışma sayfaları`,body:`
Her sütunun bir numarası (C1, C2…), adı, birimi ve isteğe bağlı spesifikasyon sınırları vardır. Metin sütunları C2-T, tarih sütunları C3-D olarak gösterilir. Eksik sayısal değer * ile gösterilir.

## Veri girme ve düzenleme
- Hücreye yazmaya başlayın ya da çift tıklayın; Enter / Tab onaylar, Esc iptal eder.
- Ad ve Birim satırına çift tıklayarak sütunu adlandırın; **F4** sütun özellikleri panelini açar (veri tipi, ondalık, AÖL / Hedef / ÜÖL, vurgular).
- Ondalık virgül de nokta da kabul edilir. Excel'den kopyalanan tablolar Ctrl+V ile yapıştırılır; ilk satır başlık gibi görünüyorsa sütun adı olur.
- **Düzen › Bağlantılı Yapıştır** özel yapıştırma seçeneklerini açar: devrik yapıştırma, boş hücreleri atlama, yeni sütun olarak ekleme.
- **Düzen › Sil** (Ctrl+-): tüm satırları kapsayan seçimde sütunları, tüm sütunları kapsayan seçimde satırları, aksi halde hücreleri siler (alttaki değerler yukarı kayar).
- **Düzen › Bul ve Değiştir…** (Ctrl+F): büyük / küçük harf, tüm hücre ve sütun kapsamı seçenekleriyle arar; Tümünü değiştir tek adımda geri alınır.
- Tüm düzenlemeler Ctrl+Z / Ctrl+Y ile geri alınır / yinelenir.

Sayfa sekmesine çift tıklayarak sayfayı yeniden adlandırabilirsiniz.`,links:[[`Düzen`,`Bul ve Değiştir…`],[`Veri`,`Sütun Özellikleri…`]]},{id:`files`,section:`topics`,title:`Veri alma, kaydetme ve dışa aktarma`,body:`
## Açma ve içe aktarma
- **Dosya › Aç…** proje (.qsp), CSV / TXT / TSV ya da XLSX açar. XLSX'teki her sayfa ayrı çalışma sayfası olur.
- **İçe Aktar › Ölçüm cihazı dosyası…** cihaz çıktıları içindir: üstteki açıklama satırlarını atlayabilir, ayırıcıyı (sekme, ;, virgül, boşluk) ve ondalık işaretini otomatik bulur, önizlemede sütun seçtirir.
- **İçe Aktar › Veritabanı (ODBC)…** tarayıcıda ODBC bulunmadığından panodan yapıştırma, dışa aktarılmış dosya ya da JSON / CSV adresi seçeneklerini sunar.
- **İçe Aktar › Panodan tablo** (Ctrl+Shift+V) panodaki tabloyu yeni sayfaya alır.

## Kaydetme
Proje dosyası (.qsp) çalışma sayfalarını, çıktıları ve rapor taslağını içerir ve indirilenler klasörüne kaydedilir. Açılan ve kaydedilen son 8 proje **Dosya › Son Kullanılanlar** altında listelenir; 2 MB'a kadar olan projeler bu tarayıcıda saklandığından listeden doğrudan açılabilir.

## Dışa aktarma
Excel (tüm sayfalar), CSV (etkin sayfa, noktalı virgül ve ondalık virgül), grafikler (PNG + SVG) ve PDF / Word raporu.`,links:[[`Dosya`,`İçe Aktar`,`Ölçüm cihazı dosyası…`],[`Dosya`,`İçe Aktar`,`Veritabanı (ODBC)…`]]},{id:`dialogs`,section:`topics`,title:`Analiz diyalogları`,body:`
Diyaloğun solunda etkin sayfanın sütunları listelenir. Bir alana tıklayıp listeden sütuna çift tıklayın ya da **Seç** düğmesine basın; sütunu adıyla ya da C numarasıyla da yazabilirsiniz.

- Sekmeler (Veri, Tahmin, Seçenekler, Grafikler…) analize göre değişir.
- Diyalog altındaki önizleme şeridi temel sonucu Tamam'a basmadan gösterir.
- Son kullanılan ayarlar sayfa başına hatırlanır; **Düzen › Son Diyaloğu Aç** (Ctrl+E) son diyaloğu yeniden açar.
- Yeni diyalogların güven düzeyi ve α başlangıç değerleri **Dosya › Seçenekler…**'den gelir. SPC testlerinin varsayılanı **SPC › Test Kuralları** ile belirlenir.
- Arka uç bir hata döndürürse çıktı bölmesinde kırmızı * HATA * satırıyla açıklanır.`},{id:`outputs`,section:`topics`,title:`Çıktılar, gezgin ve geçmiş`,body:`
Her analiz bir çıktı oluşturur. Gezgin çıktıları zaman damgası ve notlarıyla (ör. "2 test ihlali") listeler; çalışma sayfalarına ve rapor taslağına da buradan geçilir.

- **Yeniden çalıştır** diyaloğu çıktının ayarlarıyla açar; değiştirdiğinizde aynı çıktı güncellenir.
- **Rapora ekle** çıktıyı rapor taslağına ekler. **Dışa aktar** menüsü PDF yazdırma, SVG indirme ve tabloları panoya kopyalama sunar.
- **Görünüm › Komut Satırı / Geçmiş** paneli bu oturumda çalışan analizleri ayarlarıyla ve menü komutlarını listeler; tek tıkla yeniden çalıştırılır, tüm geçmiş metin olarak kopyalanır.`,links:[[`Görünüm`,`Komut Satırı / Geçmiş`]]},{id:`reports`,section:`topics`,title:`Raporlar`,body:`
**Raporlar › Rapor Oluşturucu…** (Ctrl+Shift+R) taslaktaki çıktıları sıralamanızı, çıkarmanızı ve önizlemenizi sağlar. Rapor HTML, Word (.doc), PDF (tarayıcının yazdırma penceresinden) olarak kaydedilir ya da panoya kopyalanır.

- **PPAP Yetenek Özeti**, **MSA Raporu** ve **SPC Dönem Raporu** ilgili çıktıları otomatik toplar.
- **Şablonlar** müşteri bazında logo, firma, doküman no / revizyon ve üst / alt bilgi tanımlar; etkin şablon tüm dışa aktarımlara eklenir.`,links:[[`Raporlar`,`Rapor Oluşturucu…`]]},{id:`view`,section:`topics`,title:`Görünüm ve kişiselleştirme`,body:`
- **Görünüm › Tema**: Açık, Koyu ve Yüksek kontrast. Koyu temalarda grafikler de renkleri korunarak koyu zemine çevrilir; dışa aktarılan grafikler ve yazdırma her zaman açık temadır.
- **Görünüm › Yakınlaştır…**: arayüzü %80–%150 arasında ölçekler (Ctrl+= / Ctrl+Shift+- / Ctrl+0).
- **Görünüm › Bölmeyi Ayır**: çıktı ve çalışma sayfasını üst üste ya da yan yana gösterir; ayırıcı sürüklenerek boyutlandırılır.
- **Görünüm › Araç Çubukları** ve **Özelleştir…**: Standart, Grafik ve Kalite gruplarını ve tek tek düğmeleri gizler / gösterir.
- **Dosya › Seçenekler…**: ondalık ayırıcı, varsayılan ondalık, güven düzeyi, α, SPC testleri ve tema.

Bu ayarlar tarayıcıda saklanır ve sonraki oturumlarda geçerlidir.`,links:[[`Dosya`,`Seçenekler…`],[`Görünüm`,`Özelleştir…`]]},{id:`keys`,section:`topics`,title:`Klavye kısayolları`,body:`
- Ctrl+K komut paleti · Ctrl+E son diyalog · F1 yardım konuları · Ctrl+/ kısayol özeti
- Ctrl+N yeni çalışma sayfası · Ctrl+Shift+N yeni proje · Ctrl+O aç · Ctrl+S kaydet · Ctrl+Shift+S farklı kaydet · Ctrl+P yazdır
- Ctrl+Z / Ctrl+Y geri al / yinele · Ctrl+X / C / V kes / kopyala / yapıştır · Ctrl+Shift+V panodan yeni sayfa
- Del hücreleri temizle · Ctrl+- seçimi sil · Ctrl+F bul ve değiştir · Ctrl+A tümünü seç · F2 hücreyi düzenle · F4 sütun özellikleri
- Ctrl+= yakınlaştır · Ctrl+Shift+- uzaklaştır · Ctrl+0 %100
- Ctrl+Alt+N gezgin · Ctrl+Shift+R rapor oluşturucu · Ctrl+L canlı hat izleme
- Alt + altı çizili harf menüyü açar (Alt+E Yetenek, Alt+S SPC…); menüde ok tuşları ve Enter kullanılır.`},{id:`assistant`,section:`topics`,title:`Asistan`,body:`
**Asistan** menüsündeki sihirbazlar birkaç soruyla verinize uygun analizi önerir, nedenini açıklar ve önerilen analizin diyaloğunu açar: hipotez testleri, yetenek, kontrol kartları, MSA, grafikler, regresyon, deney tasarımı ve önce / sonra karşılaştırmaları. Hangi analizi seçeceğinizden emin değilseniz buradan başlayın; ayrıca **İstatistik Rehberi** bölümüne bakın.`,links:[[`Asistan`,`Hipotez Testleri…`],[`Asistan`,`Kontrol Kartları…`]]},{id:`g-choose`,section:`guide`,title:`Doğru analizi seçmek`,body:`
Önce iki soruyu yanıtlayın: **yanıt değişkeni ne tür** ve **amaç ne**?

## Yanıtın türü
- Sürekli ölçüm (mm, °C, süre): ortalama / değişkenlik testleri, regresyon, I-MR / Xbar kartları, normal yetenek.
- İki sonuçlu (iyi / kusurlu): oran testleri, ikili lojistik regresyon, P / NP kartları, binom yetenek.
- Sayım (kusur sayısı): Poisson testleri ve regresyonu, U / C kartları, Poisson yetenek.
- Kategorik: çapraz tablo ve ki-kare.

## Amaç
- Süreç zaman içinde kararlı mı? → kontrol kartı
- Süreç spesifikasyonu karşılıyor mu? → yetenek analizi (önce kararlılığı doğrulayın)
- Ölçüm sistemi yeterli mi? → MSA (Tip 1, Gage R&R)
- Gruplar farklı mı? → t testi, ANOVA, parametrik olmayan testler
- Bir değişken diğerini etkiliyor mu? → korelasyon, regresyon, DOE

Kalite verilerinde doğru sıra genellikle şudur: ölçüm sistemi → kararlılık → yetenek → iyileştirme (DOE) → kontrol.`,links:[[`Asistan`,`Hipotez Testleri…`]]},{id:`g-means`,section:`guide`,title:`Ortalamaları karşılaştırma`,body:`
- Tek grup ve hedef değer: **1 Örneklem t** (σ biliniyorsa 1 Örneklem Z).
- İki bağımsız grup: **2 Örneklem t**. Varyanslar eşit varsayılmadıkça Welch yaklaşımı daha güvenlidir.
- Aynı birimlerde önce / sonra: **Eşleştirilmiş t** (farkların ortalaması sınanır).
- Üç veya daha çok grup: **Tek Yönlü ANOVA**, ardından hangi grupların farklı olduğunu görmek için Tukey karşılaştırmaları. Birden çok faktör için **Genel Doğrusal Model**.
- Veri çarpık ve örneklem küçükse: Wilcoxon / Mann-Whitney / Kruskal-Wallis (medyanlar üzerinden).
- Farkın önemsiz olduğunu kanıtlamak istiyorsanız klasik test yetmez: **Eşdeğerlik Testleri** (TOST) kullanın.

t testleri grup başına yaklaşık 20 gözlemden sonra normallikten sapmaya karşı oldukça dayanıklıdır; aykırı değerlere ise duyarlıdır.`,links:[[`İstatistik`,`Temel İstatistik`,`2 Örneklem t…`],[`İstatistik`,`ANOVA`,`Tek Yönlü…`]]},{id:`g-var`,section:`guide`,title:`Değişkenlik ve oranlar`,body:`
- Standart sapma hedefle: **1 Varyans**; iki grup: **2 Varyans**; çok grup: **Eşit Varyans Testi** (Levene türü testler normal olmayan veride daha güvenilirdir).
- Kusurlu oranı: **1 Oran** (kesin binom aralığı), iki hat / tedarikçi: **2 Oran**.
- Birim başına kusur hızı: **1- / 2-Örneklem Poisson Oranı**.
- Oran farklarını saptamak büyük örneklem ister; çalışmadan önce **Güç ve Örneklem Büyüklüğü** ile gereken n'yi hesaplayın.`},{id:`g-rel`,section:`guide`,title:`İlişki ve tahmin`,body:`
- İki sürekli değişken: önce **Saçılım Grafiği**, sonra **Korelasyon** (Pearson doğrusal, Spearman sıralı ilişki).
- Bir yanıtı bir / birkaç girdiyle tahmin: **Regresyon Modeli**. Artık grafiklerini (dörtlü grafik) mutlaka inceleyin: eğrilik, değişen varyans ve aykırı noktalar modeli bozar.
- Çok sayıda aday girdi: **En İyi Alt Kümeler** ya da adımsal seçim; girdiler birbirine çok bağlıysa (VIF > 5–10) **PLS**.
- Yanıt iki sonuçlu: **İkili Lojistik**; sıralı kategoriler: **Sıralı Lojistik**; sayım: **Poisson Regresyonu**.
- Korelasyon nedensellik göstermez; neden-sonuç için kontrollü deney (DOE) gerekir.`},{id:`g-spc`,section:`guide`,title:`Hangi kontrol kartı?`,body:`
## Sürekli veri
- Alt grup yok (her seferde tek ölçüm): **I-MR**.
- Alt grup boyutu 2–8: **Xbar-R**; 9 ve üzeri: **Xbar-S**.
- Alt grup içi ve gruplar arası değişkenlik ayrı ise: **I-MR-R/S (Gruplar Arası/İçi)**.
- Küçük kaymaları erken yakalamak: **EWMA** ya da **CUSUM**.
- Birbirine bağlı birkaç karakteristik: **T²** / **MEWMA**.

## Nitelik verisi
- Kusurlu birim sayısı: **P** (değişken n) ya da **NP** (sabit n).
- Kusur sayısı: **U** (değişken alan) ya da **C** (sabit alan).
- Alt grup boyutları çok büyükse aşırı yayılma sınırları daraltır: **Laney P′ / U′**.
- Nadir olaylar: olaylar arası birim **G**, olaylar arası süre **T**.

Kartın sınırları sürecin kendisinden hesaplanır, spesifikasyon sınırlarıyla karıştırılmamalıdır. Önce aşama I verisiyle sınırları kurun, özel nedenleri giderin, sonra sınırları sabitleyin. Emin değilseniz **SPC › Kart Seçim Sihirbazı…**.`,links:[[`SPC`,`Kart Seçim Sihirbazı…`]]},{id:`g-cap`,section:`guide`,title:`Süreç yeteneği`,body:`
1. Ölçüm sisteminin yeterli olduğunu doğrulayın (MSA).
2. Süreci kontrol kartıyla izleyin; kararsız bir süreçte yetenek indeksi bir tahmin değildir.
3. Dağılımı kontrol edin (Normallik Testi, Bireysel Dağılım Tanımlama).
4. Normal ise **Yetenek › Normal…**; değilse Box-Cox / Johnson dönüşümü ya da uygun dağılımla **Normal Olmayan…**; dağılım bulunamazsa **Parametrik Olmayan…**.

## İndeksleri okumak
- Cp / Cpk alt grup içi (kısa dönem) değişkenliği, Pp / Ppk toplam (uzun dönem) değişkenliği kullanır.
- Cpk ≈ Cp ise süreç ortalanmıştır; Cpk ≪ Cp ise ortalamayı hedefe kaydırmak yeterli olabilir.
- Yaygın müşteri hedefleri: Cpk ≥ 1,33 (yeni süreçte Ppk ≥ 1,67). Güven aralıklarına bakın; 30 gözlemden az veriyle Cpk çok belirsizdir.
- Kusurlu / kusur verisi için **Binom…** ve **Poisson…** yetenek analizleri kullanılır.`,links:[[`Asistan`,`Yetenek Analizi…`],[`Yetenek`,`Normal…`]]},{id:`g-msa`,section:`guide`,title:`Ölçüm sistemi analizi`,body:`
- **Tip 1 Gage Çalışması**: tek referans parçanın tek operatörce ~50 kez ölçülmesi; sapma ve tekrarlanabilirliği Cg / Cgk ile değerlendirir (genellikle ≥ 1,33 istenir).
- **Doğrusallık ve Sapma**: sapmanın ölçüm aralığı boyunca sabit olup olmadığını sınar.
- **Gage R&R (Çapraz)**: tipik düzen 10 parça × 3 operatör × 2–3 tekrar. ANOVA yöntemi operatör × parça etkileşimini de ayırır.
- **Gage R&R (İç İçe)**: her operatör farklı parçaları ölçüyorsa (yıkıcı test).
- **Nitel Uyum Analizi**: iyi / kötü ya da sıralı değerlendirmelerde operatör içi, operatörler arası ve standarda uyum (kappa).

## Kabul ölçütleri (yaygın kullanım)
- %Çalışma değişimi ya da %Tolerans < %10: kabul; %10–%30: koşullu; > %30: yetersiz.
- Ayırt edilebilir kategori sayısı (ndc) ≥ 5.`,links:[[`Asistan`,`Ölçüm Sistemi Analizi (MSA)…`],[`MSA`,`Gage R&R (Çapraz) — ANOVA…`]]},{id:`g-doe`,section:`guide`,title:`Deney tasarımı`,body:`
- **Tarama** (çok faktör, hangileri önemli?): 2 düzeyli kesirli faktöriyel ya da Plackett-Burman; eğrilik şüphesi varsa merkez noktası ekleyin ya da tanımlayıcı tarama tasarımı kullanın.
- **Karakterizasyon**: önemli 2–5 faktörle tam faktöriyel; etkileşimleri tahmin eder.
- **Optimizasyon**: yanıt yüzeyi (merkezi bileşik ya da Box-Behnken) ve **Yanıt Eniyileyici**.
- Bileşenlerin toplamı sabitse (formülasyon): **Karışım Tasarımı**. Gürültüye dayanıklılık: **Taguchi**.

Çalışma sırasını rastgele yapın, tekrar ekleyin ve analizde artık grafiklerini kontrol edin.`,links:[[`Asistan`,`Deney Tasarımı`,`Tarama…`]]},{id:`g-p`,section:`guide`,title:`p değeri ve güven aralığı`,body:`
- p değeri, sıfır hipotezi doğruysa en az gözlenen kadar uç bir sonucun görülme olasılığıdır. p < α (çoğunlukla 0,05) ise fark "istatistiksel olarak anlamlı" kabul edilir.
- Anlamlılık pratik önem demek değildir: çok büyük örneklemde küçük farklar da anlamlı çıkar. Güven aralığının genişliğine ve farkın büyüklüğüne bakın.
- p > α "fark yok" demek değildir; yalnızca farkı gösterecek kanıt bulunamamıştır (güç yetersiz olabilir).
- %95 güven aralığı, aynı yöntem tekrar tekrar uygulandığında aralıkların yaklaşık %95'inin gerçek değeri içereceği anlamına gelir.
- Varsayılan güven düzeyi ve α **Dosya › Seçenekler…**'den değiştirilebilir.`},{id:`g-power`,section:`guide`,title:`Güç ve örneklem büyüklüğü`,body:`
Güç, gerçekte var olan bir farkı testin yakalama olasılığıdır (genellikle %80–%90 hedeflenir). Örneklem büyüklüğü, saptamak istediğiniz en küçük fark, değişkenlik ve α ile birlikte belirlenir: dördünden üçünü verin, dördüncüsü hesaplansın.

- Fark yarıya inerse gereken örneklem yaklaşık dört katına çıkar.
- Eşdeğerlik ve tolerans aralıkları için ayrı hesaplar vardır (**Güç ve Örneklem Büyüklüğü** menüsü).`},{id:`m-desc`,section:`methods`,title:`Tanımlayıcı istatistikler`,body:`
= x̄ = Σxᵢ / n        s = √[ Σ(xᵢ − x̄)² / (n − 1) ]        SE ortalama = s / √n

Çeyrekler sıralı verinin (n + 1)·p konumundan doğrusal ara değerle bulunur (Q1: p = 0,25, Q3: p = 0,75). Eksik değerler (*) hesaba katılmaz ve N* olarak ayrıca raporlanır. Grafik Özet, ortalama için t, medyan için sıra istatistiklerine dayalı (dağılımdan bağımsız) güven aralığı verir.`},{id:`m-t`,section:`methods`,title:`t testleri ve Z testi`,body:`
## 1 örneklem
= t = (x̄ − μ₀) / (s / √n),  sd = n − 1        GA: x̄ ± t(α/2; n−1) · s/√n

Z testinde s yerine bilinen σ ve t yerine standart normal kullanılır.

## 2 örneklem (Welch, eşit varyans varsayılmaz)
= t = (x̄₁ − x̄₂ − δ₀) / √(s₁²/n₁ + s₂²/n₂)
= sd = (s₁²/n₁ + s₂²/n₂)² / [ (s₁²/n₁)²/(n₁−1) + (s₂²/n₂)²/(n₂−1) ]

Eşit varyans seçilirse birleşik sapma sₚ² = [(n₁−1)s₁² + (n₂−1)s₂²] / (n₁ + n₂ − 2) ve sd = n₁ + n₂ − 2 kullanılır.

## Eşleştirilmiş
Farklar dᵢ = x₁ᵢ − x₂ᵢ üzerinde 1 örneklem t testi uygulanır.`,links:[[`İstatistik`,`Temel İstatistik`,`1 Örneklem t…`]]},{id:`m-anova`,section:`methods`,title:`ANOVA ve genel doğrusal model`,body:`
Toplam kareler toplamı, faktörlere ve hataya ayrıştırılır:
= KT_toplam = Σ(yᵢ − ȳ)² = KT_faktör + KT_hata        F = (KT_faktör / sd_faktör) / (KT_hata / sd_hata)

Tek yönlü ANOVA'da KT_faktör = Σ nⱼ(ȳⱼ − ȳ)². Dengesiz ve çok faktörlü modellerde (GLM) düzeltilmiş (Tip III) kareler toplamı, model en küçük kareler ile uydurularak terim çıkarıldığında artan hata kareler toplamından bulunur. Çoklu karşılaştırmalarda Tukey yöntemi aile hata oranını α'da tutar (stüdentleştirilmiş aralık dağılımı). Rastgele etkili modellerde varyans bileşenleri beklenen kareler ortalamalarından (ya da REML ile) tahmin edilir.`,links:[[`İstatistik`,`ANOVA`,`Genel Doğrusal Model…`]]},{id:`m-reg`,section:`methods`,title:`Regresyon`,body:`
En küçük kareler çözümü:
= b = (XᵀX)⁻¹ Xᵀy        ŷ = Xb        eᵢ = yᵢ − ŷᵢ
= S = √[ Σeᵢ² / (n − p) ]        R² = 1 − KT_hata / KT_toplam        R²(düz.) = 1 − (1 − R²)(n − 1)/(n − p)
= SE(bⱼ) = S · √[(XᵀX)⁻¹]ⱼⱼ        t = bⱼ / SE(bⱼ)        VIFⱼ = 1 / (1 − Rⱼ²)

Tahmin edilmiş R² (PRESS) her gözlem dışarıda bırakılarak hesaplanan artıklarla bulunur: PRESS = Σ[eᵢ / (1 − hᵢᵢ)]². Kaldıraç hᵢᵢ şapka matrisinin köşegenidir; standartlaştırılmış artık |r| > 2 olan gözlemler "olağandışı" olarak işaretlenir. Lojistik ve Poisson regresyonu en çok olabilirlik (yinelemeli ağırlıklı en küçük kareler) ile uydurulur.`,links:[[`İstatistik`,`Regresyon`,`Regresyon Modeli…`]]},{id:`m-spc`,section:`methods`,title:`Kontrol kartı sınırları`,body:`
Sınırlar merkez çizgisinden k·σ (varsayılan k = 3) uzaklıktadır; σ süreç içi değişkenlikten tahmin edilir.

## Değişken kartları
= I-MR:   σ̂ = MR̄ / d₂ (d₂ = 1,128 iki noktalı MR için)    I: x̄ ± 3σ̂     MR: ÜKS = D₄·MR̄
= Xbar-R: σ̂ = R̄ / d₂(n)     Xbar: x̿ ± A₂R̄     R: D₃R̄ … D₄R̄
= Xbar-S: σ̂ = s̄ / c₄(n) (ya da birleşik s)     Xbar: x̿ ± 3σ̂/√n     S: B₃s̄ … B₄s̄

## Nitelik kartları
= P:  p̄ ± 3√[ p̄(1 − p̄) / nᵢ ]        NP: np̄ ± 3√[ np̄(1 − p̄) ]
= U:  ū ± 3√( ū / nᵢ )               C:  c̄ ± 3√c̄

Laney P′ / U′ kartları, z değerlerinin hareketli aralığından bulunan σz çarpanıyla aşırı yayılmayı düzeltir.

## Zaman ağırlıklı
= EWMA: zᵢ = λxᵢ + (1 − λ)zᵢ₋₁,   sınırlar μ ± Lσ √{ λ/(2 − λ) · [1 − (1 − λ)²ⁱ] }
= CUSUM: Cᵢ⁺ = max(0, Cᵢ₋₁⁺ + xᵢ − μ − kσ),  Cᵢ⁻ = max(0, Cᵢ₋₁⁻ − xᵢ + μ − kσ),  sınır hσ

## Özel neden testleri
1: bir nokta 3σ dışında · 2: aynı tarafta 9 nokta · 3: sürekli artan / azalan 6 nokta · 4: 14 nokta bir artan bir azalan · 5: 3 noktadan 2'si 2σ dışında · 6: 5 noktadan 4'ü 1σ dışında · 7: 15 nokta 1σ içinde · 8: 8 nokta 1σ dışında (iki tarafta). K değerleri SPC › Test Kuralları'ndan değiştirilebilir.`,links:[[`SPC`,`Test Kuralları (Nelson / WE)…`]]},{id:`m-cap`,section:`methods`,title:`Yetenek indeksleri`,body:`
## Standart sapmalar
- σ(içinde): alt grup boyutu > 1 ise birleşik standart sapma / c₄ (ya da R̄/d₂); alt grup boyutu 1 ise MR̄ / d₂.
- σ(toplam): tüm verinin örneklem standart sapması s (isteğe bağlı c₄ düzeltmesiyle).

## İndeksler
= Cp = (ÜÖL − AÖL) / (6σ_içinde)          Pp = (ÜÖL − AÖL) / (6σ_toplam)
= CPU = (ÜÖL − x̄) / (3σ_içinde)   CPL = (x̄ − AÖL) / (3σ_içinde)   Cpk = min(CPU, CPL)
= PPU, PPL, Ppk aynı biçimde σ_toplam ile
= Cpm = (ÜÖL − AÖL) / (6 √[ s² + (x̄ − T)² ])
= Beklenen PPM (ÜÖL üzeri) = 10⁶ · [1 − Φ((ÜÖL − x̄)/σ)]        Z.bench = Φ⁻¹(1 − p_toplam)

Güven aralıkları: Cp ve Pp için ki-kare dağılımı; Cpk ve Ppk için normal yaklaşımı kullanılır (SE ≈ √[1/(9n) + Cpk²/(2(n − 1))]).

## Normal olmayan veri
Dönüşüm (Box-Cox: y = x^λ, Johnson ailesi) sonrasında normal formüller uygulanır ya da uydurulan dağılımın yüzdelikleriyle:
= Pp = (ÜÖL − AÖL) / (X₀,₉₉₈₆₅ − X₀,₀₀₁₃₅)        Ppk = min[ (ÜÖL − X₀,₅)/(X₀,₉₉₈₆₅ − X₀,₅), (X₀,₅ − AÖL)/(X₀,₅ − X₀,₀₀₁₃₅) ]`,links:[[`Yetenek`,`Normal…`],[`Yetenek`,`Normal Olmayan…`]]},{id:`m-grr`,section:`methods`,title:`Gage R&R (ANOVA yöntemi)`,body:`
Parça (P), operatör (O) ve P×O etkileşimli iki yönlü ANOVA uydurulur (r tekrar, p parça, o operatör). Etkileşimin p değeri 0,25'ten büyükse terim hataya katılarak model yeniden kurulur. Varyans bileşenleri beklenen kareler ortalamalarından:
= σ²_tekrarlanabilirlik = KO_hata
= σ²_P×O = (KO_P×O − KO_hata) / r
= σ²_operatör = (KO_O − KO_P×O) / (p·r)
= σ²_parça = (KO_P − KO_P×O) / (o·r)
= σ²_yeniden üretilebilirlik = σ²_operatör + σ²_P×O        σ²_R&R = σ²_tekrarlanabilirlik + σ²_yeniden üretilebilirlik

Negatif çıkan bileşen sıfır alınır. Çalışma değişimi = 6σ (çarpan diyalogdan değiştirilebilir).
= %Çalışma Değ. = 100 · σ_bileşen / σ_toplam        %Tolerans = 100 · 6σ_bileşen / (ÜÖL − AÖL)
= ndc = ⌊ 1,41 · σ_parça / σ_R&R ⌋

Xbar/R yönteminde tekrarlanabilirlik R̄/d₂, operatör etkisi operatör ortalamalarının aralığından hesaplanır; etkileşim ayrılamaz.

## Tip 1
= Cg = (K/100 · Tol) / (L · s)        Cgk = (K/200 · Tol − |x̄ − Ref|) / (L/2 · s)        (varsayılan K = 20, L = 6)`,links:[[`MSA`,`Gage R&R (Çapraz) — ANOVA…`],[`MSA`,`Tip 1 Gage Çalışması…`]]},{id:`m-norm`,section:`methods`,title:`Normallik ve dağılım uyumu`,body:`
- **Anderson-Darling**: ampirik ve uydurulan dağılım fonksiyonları arasındaki farkın kuyrukları ağırlıklandırılmış ölçüsü.
= A² = −n − (1/n) Σ (2i − 1) [ ln F(x₍ᵢ₎) + ln(1 − F(x₍ₙ₊₁₋ᵢ₎)) ]
- **Ryan-Joiner**: normal olasılık grafiğindeki korelasyon (Shapiro-Wilk'e benzer).
- **Kolmogorov-Smirnov**: ampirik ve teorik CDF arasındaki en büyük dikey uzaklık.

Dağılım tanımlamada parametreler en çok olabilirlikle tahmin edilir; 3 parametreli dağılımlar için olabilirlik oranı testi (LRT) ek parametrenin gerekli olup olmadığını gösterir.`},{id:`m-prop`,section:`methods`,title:`Oran ve Poisson testleri`,body:`
- 1 oran: kesin yöntem binom dağılımına dayanır; güven aralığı Clopper-Pearson (beta dağılımı yüzdelikleri). Normal yaklaşım seçilirse z = (p̂ − p₀) / √[p₀(1 − p₀)/n].
- 2 oran: fark için normal yaklaşım; isteğe bağlı birleşik oranla z testi ve Fisher kesin testi.
- Poisson oranı: toplam olay sayısı Poisson kabul edilir; kesin aralık ki-kare dağılımından bulunur.`},{id:`m-doe`,section:`methods`,title:`Faktöriyel tasarım analizi`,body:`
Faktörler −1 / +1 olarak kodlanır. İki düzeyli tasarımda bir terimin etkisi katsayısının iki katıdır:
= Etki = ȳ(+) − ȳ(−) = 2 · b

Tekrar yoksa önemli etkiler Lenth yöntemiyle seçilir: s₀ = 1,5 · medyan|etki|, PSE = 1,5 · medyan{|etki| : |etki| < 2,5 s₀}; Pareto grafiğindeki sınır t(0,975; m/3) · PSE'dir. Kesirli tasarımlarda takma ad (alias) yapısı tanımlayıcı ilişkiden türetilir. Merkez noktaları eğrilik testi için kullanılır.`,links:[[`İstatistik`,`Deney Tasarımı (DOE)`,`Faktöriyel Tasarımı Analiz Et…`]]}];function c(){let t=new Map;for(let n of e){let e=n.path.slice(0,n.path.length>2?2:1).join(` › `);t.has(e)||t.set(e,[]),t.get(e).push(n.path)}let n=[`QualiStat'ta ${e.length} analiz ve veri işlemi menüden çalıştırılabilir. Hesaplamalar sunucudaki hesaplama motorunda ya da (grafik, veri işlemleri gibi) tarayıcıda yapılır; ana yöntemlerin formülleri bu bölümün diğer konularındadır.`,``];for(let[e,r]of t){n.push(`## ${e}`);for(let t of r)n.push(`- ${t.slice(e.split(` › `).length).join(` › `)||t[t.length-1]}`);n.push(``)}return{id:`m-index`,section:`methods`,title:`Uygulanan analizler dizini`,body:n.join(`
`)}}var l=null;function u(){if(!l){let e=s.filter(e=>e.section===`methods`);l=[...s.filter(e=>e.section!==`methods`),c(),...e]}return l}var d=i(),f=e=>e.toLocaleLowerCase(`tr-TR`);function p(e,t){return e.split(/(\*\*[^*]+\*\*)/g).map((e,n)=>{let r=e.startsWith(`**`)&&e.endsWith(`**`),i=r?e.slice(2,-2):e,o=i;if(t&&f(i).includes(t)){let e=[],n=i,r=0;for(;n;){let i=f(n).indexOf(t);if(i<0){e.push(n);break}e.push(n.slice(0,i),(0,d.jsx)(`mark`,{children:n.slice(i,i+t.length)},r++)),n=n.slice(i+t.length)}o=e}return r?(0,d.jsx)(`b`,{children:o},n):(0,d.jsx)(a.Fragment,{children:o},n)})}function m({text:e,q:t}){let n=[],r=null,i=()=>{if(!r)return;let e=n.length;r.kind===`p`?n.push((0,d.jsx)(`p`,{children:p(r.items.join(` `),t)},e)):r.kind===`ul`?n.push((0,d.jsx)(`ul`,{children:r.items.map((e,n)=>(0,d.jsx)(`li`,{children:p(e,t)},n))},e)):n.push((0,d.jsx)(`pre`,{className:`qs-help-f`,children:r.items.join(`
`)},e)),r=null},a=(e,t)=>{(!r||r.kind!==e)&&(i(),r={kind:e,items:[]}),r.items.push(t)};for(let r of e.trim().split(`
`)){let e=r.trim();e?e.startsWith(`## `)?(i(),n.push((0,d.jsx)(`h3`,{children:p(e.slice(3),t)},n.length))):e.startsWith(`- `)?a(`ul`,e.slice(2)):e.startsWith(`= `)?a(`f`,e.slice(2)):a(`p`,e):i()}return i(),(0,d.jsx)(d.Fragment,{children:n})}function h({section:e,onClose:t}){let i=r(),s=(0,a.useMemo)(()=>u(),[]),[c,l]=(0,a.useState)(e),[p,h]=(0,a.useState)(``),g=f(p.trim()),_=s.filter(e=>g?f(`${e.title}\n${e.body}`).includes(g):e.section===c),[v,y]=(0,a.useState)(s.find(t=>t.section===e)?.id??s[0].id),b=_.find(e=>e.id===v)??_[0]??s.find(e=>e.id===v);return(0,a.useEffect)(()=>{l(e),y(s.find(t=>t.section===e)?.id??s[0].id)},[e,s]),(0,a.useEffect)(()=>{let e=e=>{e.key===`Escape`&&(e.preventDefault(),t())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t]),(0,d.jsx)(`div`,{className:`d-overlay`,style:{zIndex:140,paddingTop:32},onMouseDown:e=>{e.target===e.currentTarget&&t()},children:(0,d.jsxs)(`div`,{className:`d-box qs-help`,style:{maxWidth:1080},role:`dialog`,"aria-modal":`true`,"aria-label":`Yardım`,children:[(0,d.jsxs)(`div`,{className:`d-title`,children:[(0,d.jsx)(n,{name:`book`,className:`lead`}),(0,d.jsx)(`h1`,{children:`Yardım`}),(0,d.jsxs)(`span`,{className:`path`,children:[`Yardım › `,o[c]]}),(0,d.jsx)(`div`,{style:{marginLeft:`auto`},children:(0,d.jsx)(`button`,{type:`button`,className:`d-icon-btn`,"aria-label":`Kapat`,onClick:t,children:(0,d.jsx)(n,{name:`close`})})})]}),(0,d.jsx)(`div`,{className:`d-tabs`,role:`tablist`,children:Object.keys(o).map(e=>(0,d.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":!g&&c===e,className:`d-tab${!g&&c===e?` on`:``}`,onClick:()=>{h(``),l(e),y(s.find(t=>t.section===e).id)},children:o[e]},e))}),(0,d.jsxs)(`div`,{className:`qs-help-main`,children:[(0,d.jsxs)(`nav`,{className:`qs-help-side`,"aria-label":`Konular`,children:[(0,d.jsxs)(`label`,{className:`qs-nav-search`,style:{margin:`0 0 6px`},children:[(0,d.jsx)(n,{name:`search`}),(0,d.jsx)(`span`,{className:`sr-only`,children:`Yardımda ara`}),(0,d.jsx)(`input`,{type:`search`,placeholder:`Tüm yardımda ara`,value:p,onChange:e=>h(e.target.value),autoFocus:!0})]}),g&&(0,d.jsxs)(`div`,{className:`qs-nav-group`,children:[_.length,` sonuç`]}),_.map(e=>(0,d.jsx)(`button`,{type:`button`,className:`qs-nav${b&&e.id===b.id?` is-sel`:``}`,onClick:()=>y(e.id),children:(0,d.jsxs)(`span`,{className:`txt`,children:[(0,d.jsx)(`span`,{className:`t1`,children:e.title}),g&&(0,d.jsx)(`span`,{className:`t2`,children:o[e.section]})]})},e.id)),!_.length&&(0,d.jsx)(`div`,{className:`qs-nav-empty`,children:`Eşleşme yok`})]}),(0,d.jsx)(`article`,{className:`qs-help-body`,children:b&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`h2`,{children:b.title}),(0,d.jsx)(m,{text:b.body,q:g}),b.links?.length?(0,d.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:6,marginTop:8},children:b.links.map(e=>(0,d.jsxs)(`button`,{type:`button`,className:`qs-btn sm`,onClick:()=>{t(),i.invokeMenu(e)},children:[(0,d.jsx)(n,{name:`chevRight`,size:12}),e.join(` › `)]},e.join(`/`)))}):null]})})]})]})})}export{h as default};