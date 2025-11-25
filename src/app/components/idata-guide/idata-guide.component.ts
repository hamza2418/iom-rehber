import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-idata-guide',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="idata-guide-container">
      <div class="header">
        <h2>📝 iData Randevu Kayıt Rehberi</h2>
        <p class="subtitle">Adım adım başvuru süreci ve dosya numarası sıralaması</p>
        <a href="https://ulusalrandevu.idata.com.tr/tr" target="_blank" rel="noopener" class="idata-link">
          🔗 iData Başvuru Sayfası
        </a>
      </div>

      <div class="steps-timeline">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3>Türk Vatandaşı mıyım? Sorusu</h3>
            <p><strong>Cevap:</strong> YES / EVET seçin</p>
            <p class="note">Türkiye'de ikamet eden Türk vatandaşları için bu seçenek seçilmelidir.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3>Metni Okudum, Anladım ve Kabul Ediyorum</h3>
            <p>Bilgilendirme metnini okuyun ve onay kutucuğunu işaretleyin.</p>
            <p><strong>Captcha:</strong> Doğrulama kodunu girin ve "DEVAM ET" butonuna tıklayın.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3>Başvuru Amacı Seçimi</h3>
            <p><strong>Seçilecek Seçenek:</strong></p>
            <div class="highlight-box">
              "Aile Birleşimi kapsamında Almanya'da yaşayan bir aile üyesi (?) yanında yaşamak için veya nişanlımla evlenmek için başvuruda bulunmak istiyorum"
            </div>
            <p class="note">⚠️ Bu seçenek mülteci aile birleşimi için doğru seçenektir.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content">
            <h3>İkamet Şehri Seçimi</h3>
            <p>İkamet ettiğiniz şehri seçin (örn: Bayburt, İstanbul, Ankara vb.)</p>
            <p class="note">Bazı şehirler için randevu kapasitesi farklılık gösterebilir.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">5</div>
          <div class="step-content">
            <h3>Aile Üyesi Bilgisi Onayı</h3>
            <p><strong>Soru:</strong> "Almanya'daki ailenizin yanına taşınmak istiyorsunuz. Aşağıdaki sorulara ailesiyle birleşmek üzere Almanya'ya taşınacak kişinin bakış açısıyla cevap verilmesi gerekmektedir."</p>
            <p><strong>Cevap:</strong> EVET seçin</p>
            <p class="info-text">Çocuk Almanya'ya taşınacaksa soruları çocuğun bakış açısıyla cevaplayın. Örnek: "Anne/babam Almanya'da yaşıyor"</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">6</div>
          <div class="step-content">
            <h3>İkincil Koruma Statüsü (Subsidiärer Schutz)</h3>
            <p><strong>Soru:</strong> "İkincil koruma statüsü verilecektir" ibaresi yer almalıdır.</p>
            <p><strong>Cevap:</strong> HAYIR (çoğu durumda)</p>
            <p class="note">Eğer BAMF kararınızda "Mülteci" (Flüchtling - § 3 AsylG) yazıyorsa HAYIR seçin. İkincil koruma (Subsidiärer Schutz - § 4 AsylG) ise EVET seçin.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">7</div>
          <div class="step-content">
            <h3>Almanya'daki Aile Üyesi Bilgileri</h3>
            <p>Almanya'da yaşayan eş, reşit olmayan çocuk veya ebeveyn bilgilerini girin.</p>
            <div class="form-info">
              <p><strong>Gerekli Bilgiler:</strong></p>
              <ul>
                <li>Alman İkamet Yasası (AufenthG) madde numaraları listesinden uygun olanı seçin</li>
                <li>§ 23, 4. fıkrası (mülteci için yaygın)</li>
                <li>§ 25, 1. fıkrası veya § 25, 2. fıkrası</li>
              </ul>
            </div>
            <p><strong>Onay:</strong> "Almanya'daki aile üyesinin bilgilerini doğru verdiğimi onaylıyorum" - EVET</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">8</div>
          <div class="step-content">
            <h3>Gerekli Evraklar ve Randevu Alma</h3>
            <div class="important-box">
              <h4>ÖNEMLİ UYARILAR:</h4>
              <ul>
                <li>Randevu oluşturmak için "RANDEVU AL" butonuna basın</li>
                <li>Evrakları PDF olarak indirmek için "İNDİR" butonunu kullanabilirsiniz</li>
                <li>Randevu kayıt sistemi 20 dakikalık süre sınırına sahiptir</li>
                <li>Evrakların hazır olduğundan emin olun</li>
                <li>ön ödeme tutarını kredi kartı ile yapmanız gerekir</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">9</div>
          <div class="step-content">
            <h3>Kişi Sayısı ve Bilgiler</h3>
            <p>Başvuru yapılacak kişi sayısını belirleyin (örn: 1, 2, 3...)</p>
            <div class="form-info">
              <p><strong>Her kişi için gerekli bilgiler:</strong></p>
              <ul>
                <li>Ad, Soyad</li>
                <li>Doğum tarihi</li>
                <li>Pasaport numarası</li>
                <li>Telefon numarası (5__ formatlı)</li>
                <li>E-posta adresi</li>
              </ul>
            </div>
            <p class="note">⚠️ E-posta adresine PNR numarası gelecektir. Doğru yazın!</p>
          </div>
        </div>

        <div class="step-item success">
          <div class="step-number">✓</div>
          <div class="step-content">
            <h3>Tebrikler! Başvurunuz Tamamlandı</h3>
            <p>Başvurunuz başarıyla kaydedildi. Size bir <strong>PNR Numarası</strong> verildi.</p>
            <div class="result-box">
              <p><strong>Ne Anlama Gelir?</strong></p>
              <p>Bu mail, randevunuzun verildiği anlamına gelmez! Sadece bekleme listesine kaydınızın alındığını gösterir.</p>
              <p><strong>Bekleme Süresi:</strong> 6-12 ay veya daha fazla sürebilir.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="info-section">
        <h3>📊 Dosya Numarası Sıralamasını Anlama</h3>
        <div class="info-card">
          <p>iData üzerinden başvuru yaptıktan sonra size verilen <strong>PNR numarası</strong>, sistemdeki sıranızı gösterir.</p>
          <div class="highlight-box">
            <p><strong>Örnek:</strong> PNR: ALM-FAP-2024-12345</p>
            <p>Bu numaradaki "12345" kısmı, 2024 yılında yapılan 12.345. başvuru olduğunu gösterir.</p>
          </div>
          <p class="note">⚠️ Sıra numarası her zaman öncelik sırasını göstermez. IOM, acil durumları (çocuk 18 yaşına girmek üzere, sağlık problemi vb.) önceliklendirebilir.</p>
        </div>

        <div class="info-card">
          <h4>Dosyanızın Durumunu Öğrenme:</h4>
          <ul>
            <li>iData sisteminde "İptal Edildi" görünüyorsa → Dosyanız IOM'e devredilmiş demektir (Normal)</li>
            <li>IOM'den mail gelirse → Evrak talep ediliyor, süreç başlıyor</li>
            <li>IOM'den telefon gelirse → Randevu veriliyor</li>
          </ul>
        </div>
      </div>

      <div class="tips-section">
        <h3>💡 Önemli İpuçları</h3>
        <div class="tip-box">
          <p><strong>✓</strong> PNR numaranızı mutlaka kaydedin ve güvenli bir yerde saklayın</p>
        </div>
        <div class="tip-box">
          <p><strong>✓</strong> Spam/Gereksiz mail kutunuzu düzenli kontrol edin</p>
        </div>
        <div class="tip-box">
          <p><strong>✓</strong> Telefon numaranızı her zaman açık tutun</p>
        </div>
        <div class="tip-box">
          <p><strong>✓</strong> Evraklarınızı önceden hazırlamaya başlayın, bekleme süresini boşa harcamayın</p>
        </div>
        <div class="tip-box">
          <p><strong>✓</strong> BAMF kararını aldıktan sonra 3 ay içinde "Fristwahrende Anzeige" yapmayı unutmayın!</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .idata-guide-container { max-width: 1000px; margin: auto; padding: 20px; }

    .header { text-align: center; margin-bottom: 40px; }
    .header h2 { color: #003366; margin-bottom: 10px; }
    .subtitle { color: #666; font-size: 1.1rem; margin-bottom: 20px; }

    .idata-link {
      display: inline-block;
      background: #d92424;
      color: white;
      padding: 12px 30px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s;
    }
    .idata-link:hover { background: #b01d1d; transform: translateY(-2px); }

    .steps-timeline { position: relative; }

    .step-item {
      display: flex;
      gap: 20px;
      margin-bottom: 30px;
      padding: 25px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      border-left: 5px solid #003366;
    }

    .step-item.success { border-left-color: #28a745; background: #f0fff4; }

    .step-number {
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      background: #003366;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .step-item.success .step-number { background: #28a745; }

    .step-content { flex: 1; }
    .step-content h3 { margin-top: 0; color: #003366; }
    .step-content p { margin: 10px 0; line-height: 1.6; }

    .highlight-box {
      background: #fffdf0;
      border-left: 4px solid #ffcc00;
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
    }

    .important-box {
      background: #fff5f5;
      border-left: 4px solid #d92424;
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
    }

    .important-box h4 { margin-top: 0; color: #d92424; }
    .important-box ul { margin: 10px 0; padding-left: 20px; }
    .important-box li { margin: 8px 0; }

    .result-box {
      background: #f0fff4;
      border-left: 4px solid #28a745;
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
    }

    .note {
      background: #f0faff;
      padding: 10px;
      border-radius: 5px;
      font-size: 0.95rem;
      color: #555;
      margin: 10px 0;
    }

    .info-text {
      background: #f8f9fa;
      padding: 10px;
      border-radius: 5px;
      font-style: italic;
      font-size: 0.95rem;
    }

    .form-info {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 8px;
      margin: 10px 0;
    }
    .form-info ul { margin: 10px 0; padding-left: 20px; }
    .form-info li { margin: 5px 0; }

    .info-section { margin-top: 50px; }
    .info-section h3 { color: #003366; margin-bottom: 20px; }

    .info-card {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      margin-bottom: 20px;
    }
    .info-card h4 { color: #003366; margin-bottom: 15px; }
    .info-card ul { padding-left: 20px; }
    .info-card li { margin: 10px 0; line-height: 1.6; }

    .tips-section { margin-top: 50px; }
    .tips-section h3 { color: #003366; margin-bottom: 20px; }

    .tip-box {
      background: white;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      margin-bottom: 15px;
      border-left: 4px solid #28a745;
    }
    .tip-box strong { color: #28a745; }
  `]
})
export class IdataGuideComponent {}
