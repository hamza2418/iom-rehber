import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="contact-page">
      <div class="contact-header">
        <h2>📞 İletişim & Ulaşım</h2>
        <p>IOM Aile Destek Programı (FAP) resmi iletişim kanalları</p>
      </div>

      <div class="telegram-banner">
        <div class="telegram-icon">💬</div>
        <div class="telegram-content">
          <h3>Telegram Destek Grubu</h3>
          <p>Yüzlerce kişinin deneyimlerini paylaştığı, sorularınıza gerçek zamanlı yanıt bulabileceğiniz topluluk grubumuza katılın!</p>
          <a href="https://t.me/+dOLEk5P8aCYwMmU8" target="_blank" rel="noopener" class="telegram-btn">
            📱 Telegram Grubuna Katıl
          </a>
        </div>
      </div>

      <div class="document-tracking">
        <h3>📂 Evraklarım Almanya'ya Ulaştı mı?</h3>
        <p class="intro">Köln'de bulunan Genel Merkezden aşağıdaki iletişim bilgileriyle evraklarınızın durumunu sorgulayabilirsiniz.</p>

        <div class="warning-box">
          <p><strong>⚠️ Önemli:</strong> Mailize cevap dönülmesi 10 günü bulabilir. Hemen cevap gelmesini beklemeyin.</p>
        </div>

        <div class="contact-info-box">
          <div class="info-item">
            <strong>☎️ Türkiye'den:</strong>
            <p><a href="tel:+492289935850858">+49 228 99 358 50858</a></p>
          </div>
          <div class="info-item">
            <strong>☎️ Almanya'dan:</strong>
            <p><a href="tel:02289935850858">0228 99 358 50858</a></p>
          </div>
          <div class="info-item">
            <strong>✉️ E-posta:</strong>
            <p><a href="mailto:visa&#64;bva.bund.de">visa&#64;bva.bund.de</a></p>
          </div>
          <div class="info-item">
            <strong>🌐 Website:</strong>
            <p><a href="https://www.bva.bund.de/DE/Das-BVA/Aufgaben/V/Visa-Angelegenheiten/visa_node.html" target="_blank" rel="noopener">BVA Visa Sayfası</a></p>
          </div>
        </div>

        <div class="working-hours">
          <h4>Çalışma Saatleri (Almanya Saati)</h4>
          <p>Pazartesi - Perşembe: 8:00 - 16:30</p>
          <p>Cuma: 8:00 - 15:00</p>
          <p class="note">⚠️ Çalışma saatlerinde aramamanız halinde ulaşamazsınız.</p>
        </div>

        <div class="email-template-box">
          <h4>📧 Örnek Mail (Almanca)</h4>
          <div class="email-content">
            <p><strong>Konu:</strong> Anfrage zum Status meiner Dokumente</p>
            <div class="email-body">
              <p>Sehr geehrte Damen und Herren,</p>
              <p>Ich schreibe Ihnen, um den Status meiner Dokumente zu überprüfen und zu erfahren, ob sie erfolgreich in Deutschland angekommen sind.</p>
              <p><strong>Reisepassnummer:</strong> [PASAPORT NUMARANIZ]<br>
              <strong>Barcode-Nummer:</strong> [BARKOD NUMARANIZ]<br>
              <strong>Geburtsdatum:</strong> [DOĞUM TARİHİNİZ]</p>
              <p>Ich wäre Ihnen sehr dankbar, wenn Sie mir eine Rückmeldung bezüglich des aktuellen Status meiner Dokumente geben könnten.</p>
              <p>Vielen Dank im Voraus für Ihre Unterstützung.</p>
              <p>Mit freundlichen Grüßen,<br>[AD SOYAD]</p>
            </div>
          </div>
          <div class="barcode-info">
            <p><strong>‼️ Barkod Numaranız Nerede?</strong></p>
            <p>Konsolosluk görüşmesinde ödeme yaptığınıza dair almış olduğunuz makbuzun sağ üst kısmında yıldızlı olarak yazılıdır.</p>
            <p><strong>Örnek:</strong> * xxxxxxx *</p>
          </div>
        </div>
      </div>

      <div class="grid">
        <div class="card info-card">
          <h3>IOM Ofis Bilgileri</h3>
          <ul>
            <li>
              <strong>📍 Adres:</strong>
              <p>Esentepe Mah. 23 Temmuz Sokak No:8, Gayrettepe- Şişli / İstanbul</p>
            </li>
            <li>
              <strong>📞 Telefon:</strong>
              <p><a href="tel:+902124010250">+90 212 401 02 50</a></p>
              <small>Sabah 09:00 - 12:00 arası aramanız önerilir.</small>
            </li>
            <li>
              <strong>📧 E-posta:</strong>
              <p><a href="mailto:info.fap.tr&#64;iom.int">info.fap.tr&#64;iom.int</a></p>
            </li>
          </ul>
        </div>

        <div class="card transport-card">
          <h3>🚇 Nasıl Gidilir?</h3>
          <div class="route">
            <strong>Metro İle:</strong>
            <p>M2 Yenikapı-Hacıosman metrosuna binin. <b>Gayrettepe</b> durağında inin. "Esentepe" çıkışını kullanın.</p>
          </div>
          <div class="route">
            <strong>Metrobüs İle:</strong>
            <p><b>Zincirlikuyu</b> durağında inin. Gayrettepe metro bağlantı tünelini takip ederek Esentepe çıkışına yürüyün.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-page { max-width: 1000px; margin: auto; }
    .contact-header { text-align: center; margin-bottom: 40px; }

    .telegram-banner {
      background: linear-gradient(135deg, #0088cc 0%, #00aced 100%);
      color: white;
      padding: 40px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      gap: 30px;
      margin-bottom: 40px;
      box-shadow: 0 8px 25px rgba(0, 136, 204, 0.3);
    }
    .telegram-icon {
      font-size: 4rem;
      flex-shrink: 0;
    }
    .telegram-content h3 {
      margin: 0 0 10px 0;
      font-size: 1.8rem;
    }
    .telegram-content p {
      margin: 0 0 20px 0;
      opacity: 0.95;
      line-height: 1.5;
    }
    .telegram-btn {
      display: inline-block;
      background: white;
      color: #0088cc;
      padding: 15px 30px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;
      transition: all 0.3s;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    .telegram-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
      .telegram-banner {
        flex-direction: column;
        text-align: center;
        padding: 25px 20px;
      }

      .telegram-icon { font-size: 3rem; }
      .telegram-content h3 { font-size: 1.4rem; }
      .telegram-content p { font-size: 0.95rem; }
      .telegram-btn {
        width: 100%;
        padding: 12px 20px;
        font-size: 1rem;
      }

      .document-tracking { padding: 20px 15px; }
      .document-tracking h3 { font-size: 1.3rem; }

      .contact-info-box {
        grid-template-columns: 1fr;
        gap: 15px;
      }

      .email-template-box { padding: 15px; }
      .email-body { font-size: 0.85rem; }

      .grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .card { padding: 20px; }
    }

    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }

    .card { padding: 30px; height: 100%; }
    ul { list-style: none; padding: 0; }
    li { margin-bottom: 25px; border-bottom: 1px solid #eee; padding-bottom: 15px; }
    li:last-child { border: none; }
    strong { color: #003366; display: block; margin-bottom: 5px; font-size: 1.1rem; }
    a { color: #d92424; font-weight: bold; text-decoration: none; }

    .route { margin-bottom: 20px; background: #f8f9fa; padding: 15px; border-radius: 8px; }
    .route strong { color: #333; }
    .route p { margin: 5px 0 0; font-size: 0.95rem; }

    .document-tracking {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      margin-bottom: 40px;
    }
    .document-tracking h3 { color: #003366; margin-bottom: 10px; }
    .document-tracking .intro { color: #666; margin-bottom: 20px; }

    .warning-box {
      background: #fff5f5;
      border-left: 4px solid #d92424;
      padding: 15px;
      margin: 20px 0;
      border-radius: 5px;
    }

    .contact-info-box {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    .info-item {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 8px;
    }
    .info-item strong {
      display: block;
      color: #003366;
      margin-bottom: 8px;
    }
    .info-item p { margin: 0; }
    .info-item a { color: #d92424; }

    .working-hours {
      background: #f0faff;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      border-left: 4px solid #17a2b8;
    }
    .working-hours h4 { margin-top: 0; color: #003366; }
    .working-hours p { margin: 8px 0; }
    .working-hours .note { color: #d92424; font-weight: bold; margin-top: 15px; }

    .email-template-box {
      background: #f8f9fa;
      padding: 25px;
      border-radius: 12px;
      margin: 30px 0;
    }
    .email-template-box h4 { margin-top: 0; color: #003366; }
    .email-content {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin: 15px 0;
      border: 1px solid #ddd;
    }
    .email-content strong { color: #003366; }
    .email-body {
      background: #fafafa;
      padding: 15px;
      border-left: 3px solid #003366;
      margin-top: 10px;
      font-family: monospace;
      font-size: 0.9rem;
      line-height: 1.6;
    }
    .email-body p { margin: 10px 0; }

    .barcode-info {
      background: #fffdf0;
      border-left: 4px solid #ffcc00;
      padding: 15px;
      margin-top: 20px;
      border-radius: 5px;
    }
    .barcode-info p { margin: 8px 0; }
  `]
})
export class ContactComponent {}
