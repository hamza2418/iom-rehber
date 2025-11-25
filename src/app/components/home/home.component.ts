import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
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
  `]
})
export class HomeComponent {}
