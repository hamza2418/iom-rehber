import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="disclaimer-banner">
      <div class="disclaimer-icon">⚠️</div>
      <div class="disclaimer-text">
        <strong>Önemli Uyarı:</strong> Bu site resmi bir kurum değildir. Topluluk tecrübelerine dayalı bilgilendirme amaçlıdır.
        Hukuki tavsiye niteliği taşımaz. Resmi kaynaklardan teyit almanızı öneririz.
      </div>
    </div>

    <div class="hero">
      <h1>Almanya Aile Birleşimi Rehberi</h1>
      <p class="subtitle">IOM / FAP Süreci için Adım Adım Kılavuz</p>

      <div class="stats-grid">
        <div class="stat-card">
          <span class="icon">📂</span>
          <h3>Belge Hazırlığı</h3>
          <p>Eksiksiz dosya hazırlama rehberi</p>
        </div>
        <div class="stat-card">
          <span class="icon">📅</span>
          <h3>Randevu Takibi</h3>
          <p>iData ve IOM süreç yönetimi</p>
        </div>
        <div class="stat-card">
          <span class="icon">💡</span>
          <h3>Gerçek Tecrübeler</h3>
          <p>Yaşanmış deneyimlerden ipuçları</p>
        </div>
      </div>

      <div class="cta-section">
        <p>Sürece nereden başlayacağınızı bilmiyor musunuz?</p>
        <a routerLink="/yol-haritasi" class="btn btn-lg">Yol Haritasını Başlat →</a>
      </div>
    </div>
  `,
  styles: [`
    .disclaimer-banner {
      background: linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%);
      border: 2px solid #d92424;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      gap: 20px;
      box-shadow: 0 4px 15px rgba(217, 36, 36, 0.1);
    }

    .disclaimer-icon {
      font-size: 2.5rem;
      flex-shrink: 0;
    }

    .disclaimer-text {
      flex: 1;
      color: #555;
      line-height: 1.6;
    }

    .disclaimer-text strong {
      color: #d92424;
      display: block;
      margin-bottom: 5px;
    }

    .hero { text-align: center; padding: 40px 0; }
    h1 { font-size: 2.5rem; color: #003366; margin-bottom: 10px; }
    .subtitle { font-size: 1.2rem; color: #666; margin-bottom: 50px; }

    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-bottom: 50px; }
    .stat-card { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s; }
    .stat-card:hover { transform: translateY(-5px); }
    .icon { font-size: 3rem; display: block; margin-bottom: 15px; }
    .stat-card h3 { color: #003366; }

    .cta-section { background: #e8f4fd; padding: 40px; border-radius: 10px; display: inline-block; width: 100%; max-width: 600px; }
    .btn-lg { font-size: 1.1rem; padding: 15px 30px; margin-top: 15px; }

    @media (max-width: 768px) {
      .disclaimer-banner {
        flex-direction: column;
        text-align: center;
        padding: 15px;
        gap: 10px;
      }

      .disclaimer-icon { font-size: 2rem; }
      .disclaimer-text { font-size: 0.9rem; }

      h1 { font-size: 1.8rem; }
      .subtitle { font-size: 1rem; }

      .stats-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .stat-card { padding: 20px; }
      .icon { font-size: 2.5rem; }

      .cta-section {
        padding: 20px;
        max-width: 100%;
      }

      .btn-lg {
        font-size: 1rem;
        padding: 12px 24px;
        display: block;
        width: 100%;
      }
    }
  `]
})
export class HomeComponent {}
