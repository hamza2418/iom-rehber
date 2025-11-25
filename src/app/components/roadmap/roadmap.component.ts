import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, Step } from '../../services/content.service';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <h2>📍 Süreç Yol Haritası</h2>
      <p>Başvurudan vizeye giden yoldaki tüm aşamalar.</p>
    </div>

    <div class="timeline">
      <div class="timeline-item" *ngFor="let step of steps; let i = index" [class.active]="step.status === 'active'">
        <div class="timeline-marker">{{ step.id }}</div>
        <div class="timeline-content">
          <h3 class="title">{{ step.title }}</h3>
          <p class="description">{{ step.description }}</p>
          <div class="detail-box" *ngIf="step.detail">
            <span class="info-icon">ℹ️</span> {{ step.detail }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .timeline { position: relative; max-width: 800px; margin: 0 auto; padding: 20px 0; }
    .timeline::before {
      content: ''; position: absolute; top: 0; bottom: 0; left: 24px; width: 4px; background: #e9ecef; border-radius: 2px;
    }

    .timeline-item { position: relative; margin-bottom: 50px; padding-left: 70px; }

    .timeline-marker {
      position: absolute; left: 0; top: 0; width: 52px; height: 52px;
      background: #fff; border: 4px solid #003366; border-radius: 50%;
      text-align: center; line-height: 44px; font-weight: bold; font-size: 1.2rem; color: #003366; z-index: 1;
    }

    .timeline-item.active .timeline-marker { background: #ffcc00; border-color: #ffcc00; color: #fff; }

    .timeline-content { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); border-left: 5px solid transparent; transition: all 0.3s; }
    .timeline-item:hover .timeline-content { transform: translateX(5px); border-left-color: #ffcc00; }

    .title { margin-top: 0; color: #003366; }
    .detail-box { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 15px; font-size: 0.9rem; color: #555; display: flex; gap: 10px; }
  `]
})
export class RoadmapComponent implements OnInit {
  steps: Step[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.steps = this.contentService.getRoadmap();
  }
}
