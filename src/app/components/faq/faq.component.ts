import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, FaqItem } from '../../services/content.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="faq-page">
      <h2>❓ Sıkça Sorulan Sorular</h2>

      <div class="search-box">
        <input type="text" placeholder="Soru ara... (örn: iData, yaş, çeviri)" (input)="filter($event)">
      </div>

      <div class="faq-list">
        <div class="faq-card" *ngFor="let item of filteredFaqs" (click)="item['isOpen'] = !item['isOpen']">
          <div class="question">
            <span>{{ item.question }}</span>
            <span class="toggle">{{ item['isOpen'] ? '-' : '+' }}</span>
          </div>
          <div class="answer" [class.show]="item['isOpen']">
            <p>{{ item.answer }}</p>
            <span class="tag">{{ item.category }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .faq-page { max-width: 800px; margin: auto; }
    .search-box input { width: 100%; padding: 15px; font-size: 1rem; border: 2px solid #eee; border-radius: 8px; margin-bottom: 30px; }
    .search-box input:focus { border-color: #003366; outline: none; }

    .faq-card { background: white; margin-bottom: 15px; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05); cursor: pointer; }
    .question { padding: 20px; font-weight: 600; color: #003366; display: flex; justify-content: space-between; align-items: center; background: #fff; }
    .toggle { font-size: 1.5rem; color: #ffcc00; font-weight: bold; }

    .answer { padding: 0 20px; max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; background: #fafafa; border-top: 1px solid #f0f0f0; }
    .answer.show { padding: 20px; max-height: 500px; }
    .tag { display: inline-block; font-size: 0.8rem; background: #e9ecef; color: #666; padding: 2px 8px; border-radius: 4px; margin-top: 10px; }

    @media (max-width: 768px) {
      .faq-page { padding: 0; }

      h2 { font-size: 1.5rem; }

      .search-box input {
        padding: 12px;
        font-size: 0.95rem;
        margin-bottom: 20px;
      }

      .faq-card { margin-bottom: 12px; }

      .question {
        padding: 15px;
        font-size: 0.95rem;
        gap: 10px;
      }

      .toggle { font-size: 1.3rem; }

      .answer { font-size: 0.9rem; }
      .answer.show { padding: 15px; }
    }
  `]
})
export class FaqComponent implements OnInit {
  faqs: any[] = [];
  filteredFaqs: any[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.faqs = this.contentService.getFaqs().map(f => ({...f, isOpen: false}));
    this.filteredFaqs = this.faqs;
  }

  filter(event: any) {
    const term = event.target.value.toLowerCase();
    this.filteredFaqs = this.faqs.filter(f =>
      f.question.toLowerCase().includes(term) ||
      f.answer.toLowerCase().includes(term)
    );
  }
}
