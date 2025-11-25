import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tips',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tips-container">
      <h2>💡 Kritik İpuçları & Taktikler</h2>
      <p class="intro">Bu bilgiler gruptaki yüzlerce kişinin tecrübesinden süzülmüştür.</p>

      <div class="tip-card urgent">
        <div class="icon">🚨</div>
        <div class="content">
          <h3>BAMF Kararı Sonrası 3 Ay İçinde Fristwahrende Anzeige</h3>
          <p><strong>ÇOK KRİTİK:</strong> BAMF'tan mülteci statüsü kararı aldıktan sonraki ilk 3 ay içinde mutlaka "Fristwahrende Anzeige" (Süreyi Koruyucu Bildirim) yapmalısınız. Bu yapılmazsa eşinizden gelir ve konut şartı aranır.</p>

          <p style="margin-top: 15px;"><strong>⚠️ Neden Bu Kadar Önemli?</strong> Bu bildirimi 3 ay içinde yapmazsanız, aile birleşimi başvurunuzda eşinizin Almanya'da yeterli geliri ve büyük evi olması şartı aranır. Bildirim yaptığınızda bu şartlardan muaf tutulursunuz!</p>

          <a href="https://t.me/+dOLEk5P8aCYwMmU8" target="_blank" rel="noopener" class="detail-link">
            📱 Detaylı Yol Haritası için Telegram Grubuna Katılın
          </a>
        </div>
      </div>

      <div class="tip-card urgent">
        <div class="icon">🚨</div>
        <div class="content">
          <h3>Çocuk 18 Yaşına Girmeden!</h3>
          <p>Çocuğunuzun 18 yaşına girmesine aylar hatta günler kaldıysa, randevu beklemeden mutlaka "Fristwahrende Anzeige" (Süreyi koruyucu bildirim) yapmalısınız. Bu yapılmazsa çocuk reşit olduğunda hakkı yanabilir.</p>
        </div>
      </div>

      <div class="tip-card pro">
        <div class="icon">🏛️</div>
        <div class="content">
          <h3>İstanbul Ofisine Gitmek</h3>
          <p>İstanbul'da ikamet ediyorsanız ve evraklarınız tamsa, mail beklemek yerine Gayrettepe ofisine şahsen gidip "Evraklarım hazır, kontrol edebilir misiniz?" diye soranlar sonuç alabiliyor. (Garanti değildir ama deneyenler var)</p>
        </div>
      </div>

      <div class="tip-card warning">
        <div class="icon">📬</div>
        <div class="content">
          <h3>Spam Kutusunu Unutmayın</h3>
          <p>IOM'den gelen "Evrak Talep Maili" sıklıkla Gereksiz/Spam kutusuna düşüyor. Her gün mailinizi kontrol edin. Mail adresi genellikle <strong>info.fap.tr&#64;iom.int</strong> uzantılıdır.</p>
        </div>
      </div>

      <div class="tip-card info">
        <div class="icon">📝</div>
        <div class="content">
          <h3>Tercüme Detayı</h3>
          <p>Vukuatlı Nüfus Kayıt Örneği mutlaka "Tercüme" edilmelidir. Bazı memurlar "Apostil" istemeyebilir ama "Tercüme" şarttır. İşinizi sağlama almak için yeminli tercüme yaptırın.</p>
        </div>
      </div>

      <div class="tip-card info">
        <div class="icon">⚖️</div>
        <div class="content">
          <h3>Statü Farkı: Ayrıcalıklı vs Standart Aile Birleşimi</h3>
          <p><strong>Ayrıcalıklı (Privilegierter Familiennachzug):</strong></p>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li>Mülteci olmadan ÖNCE evlendiyseniz</li>
            <li>BAMF kararından sonraki 3 ay içinde "Fristwahrende Anzeige" yaptıysanız</li>
            <li><strong>Avantaj:</strong> Maaş şartı YOK, ev şartı YOK, A1 dil şartı genellikle YOK</li>
          </ul>
          <p style="margin-top: 10px;"><strong>Standart Aile Birleşimi:</strong></p>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li>Mülteci olduktan SONRA evlendiyseniz veya 3 ayı kaçırdıysanız</li>
            <li>Almanya\'daki eşin yeterli maaşı olmalı</li>
            <li>Kişi başı ~12m² ev şartı</li>
            <li>Türkiye\'deki eş A1 Almanca bilmeli</li>
          </ul>
        </div>
      </div>

      <div class="tip-card warning">
        <div class="icon">💰</div>
        <div class="content">
          <h3>Maddi Yetersizlik Durumunda Çözümler</h3>
          <p>Eğer "Standart Prosedür"e tabiyseniz ve Almanya\'daki eşin maaşı yetmiyorsa:</p>

          <div class="step-box">
            <h4>1. Verpflichtungserklärung (Garantör) - En Etkili</h4>
            <p>Almanya\'da yaşayan, geliri yüksek bir yakınınız (akraba veya arkadaş) Ausländerbehörde\'ye gidip kefil olur. Ailenin Almanya\'ya geldiğinde sosyal yardıma ihtiyaç duyması halinde garantör maddi olarak sorumlu olur.</p>
          </div>

          <div class="step-box">
            <h4>2. Minijob (Ek İş)</h4>
            <p>Almanya\'daki eş 538 Euro\'luk (vergiden muaf) ek bir işte çalışarak gelirini artırır. Bu, toplam geliri yeterli seviyeye çıkarabilir.</p>
          </div>

          <div class="step-box">
            <h4>3. Härtefall (İstisna Başvurusu)</h4>
            <p>Mülteci olduğunuz için ailenizin başka bir ülkede birleşme şansı olmadığını (Türkiye\'ye dönülemeyeceği) gerekçesiyle gelir şartının esnetilmesini talep edersiniz. Hukuki destek gerekebilir.</p>
          </div>
        </div>
      </div>

      <div class="tip-card urgent">
        <div class="icon">🔒</div>
        <div class="content">
          <h3>Konsoloslukta Evraklarınız Kaybolursa</h3>
          <p><strong>Resmi Yol Haritası (KVKK/DSGVO Yöntemi):</strong></p>

          <div class="step-box">
            <h4>1. Adım: Veri Koruma Sorumlusuna E-posta</h4>
            <p><strong>E-posta:</strong> DSAP&#64;ista.diplo.de</p>
            <p><strong>Konu:</strong> Verlust meiner Unterlagen / Datenschutzverletzung</p>
            <p><strong>İçerik Örneği:</strong></p>
            <div class="email-template">
              <p>Sehr geehrte Damen und Herren,</p>
              <p>hiermit möchte ich melden, dass meine am [Tarih] an Ihr Konsulat gesendeten Unterlagen (DHL/Kargo Takip No: [Varsa Takip No]) laut Ihrer Aussage nicht auffindbar sind.</p>
              <p>Da es sich um sensible personenbezogene Daten handelt (Reisepass, Identitätskarten etc.), bitte ich um eine schriftliche Bestätigung des Verlusts. Zudem möchte ich wissen, ob eine Meldung gemäß Artikel 33 DSGVO (Datenschutz-Grundverordnung) erfolgt ist.</p>
              <p>Bitte informieren Sie mich umgehend über den Verbleib meiner Dokumente.</p>
              <p>Mit freundlichen Grüßen,<br>[Adınız Soyadınız]<br>[Pasaport Numaranız / Dosya Numaranız]</p>
            </div>
          </div>

          <div class="step-box">
            <h4>2. Adım: Üst Merciye Şikayet (Çözülmezse)</h4>
            <p><strong>E-posta:</strong> poststelle&#64;bfdi.bund.de</p>
            <p><strong>Konu:</strong> Beschwerde wegen Verlust personenbezogener Daten durch das Deutsche Generalkonsulat in Istanbul</p>
          </div>

          <p style="margin-top: 15px;"><strong>⚡ Önemli:</strong> Bu yöntemle başvuru yapanlar genellikle 1 gün içinde evraklarının bulunduğu yönünde geri dönüş almışlardır. "Veri ihlali" konusu yasal yükümlülükler doğurduğu için kurumlar çok daha hızlı hareket eder.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tips-container { max-width: 900px; margin: auto; }
    .intro { margin-bottom: 30px; font-style: italic; color: #666; }

    .tip-card { display: flex; gap: 20px; padding: 25px; border-radius: 12px; margin-bottom: 20px; background: white; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-left: 6px solid #ccc; }
    .tip-card .icon { font-size: 2.5rem; }
    .tip-card h3 { margin-top: 0; margin-bottom: 10px; }
    .tip-card p { margin: 0; color: #555; }

    .tip-card.urgent { border-left-color: #d92424; background: #fff5f5; }
    .tip-card.pro { border-left-color: #28a745; background: #f0fff4; }
    .tip-card.warning { border-left-color: #ffcc00; background: #fffdf0; }
    .tip-card.info { border-left-color: #17a2b8; background: #f0faff; }

    .step-box { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; }
    .step-box h4 { margin-top: 0; color: #003366; }
    .step-box p { margin: 8px 0; }
    .step-box ul { margin: 10px 0; }
    .step-box li { margin: 5px 0; line-height: 1.6; }
    .email-template { background: white; padding: 15px; border-left: 3px solid #d92424; margin-top: 10px; font-size: 0.9rem; font-family: monospace; }
    .email-template p { margin: 5px 0; line-height: 1.6; }

    .detail-link {
      display: inline-block;
      background: #0088cc;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      margin-top: 15px;
      transition: all 0.3s;
    }
    .detail-link:hover {
      background: #006699;
      transform: translateY(-2px);
    }
  `]
})
export class TipsComponent {}
