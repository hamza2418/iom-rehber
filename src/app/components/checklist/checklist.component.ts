import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentService, DocItem } from '../../services/content.service';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="checklist-container">
      <h2>📋 Belge Kontrol Listesi</h2>
      <div class="alert alert-warning">
        Bu liste interaktiftir. Hazırladığınız belgelerin yanındaki kutucuğu işaretleyebilirsiniz.
      </div>

      <div class="category-group" *ngFor="let category of getCategories()">
        <h3 class="cat-title">{{ category }}</h3>

        <div class="doc-item" *ngFor="let doc of getDocsByCategory(category)" [class.checked]="doc.isChecked">
          <label class="checkbox-container">
            <input type="checkbox" [(ngModel)]="doc.isChecked">
            <span class="checkmark"></span>
          </label>

          <div class="doc-info">
            <div class="doc-header">
              <strong>{{ doc.title }}</strong>
              <span class="badge" *ngIf="doc.isRequired">Zorunlu</span>
            </div>
            <p>{{ doc.description }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .checklist-container { max-width: 900px; margin: auto; }
    .category-group { margin-bottom: 40px; }
    .cat-title { border-bottom: 2px solid #eee; padding-bottom: 10px; color: #555; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px; }

    .doc-item { display: flex; gap: 20px; background: white; padding: 20px; margin-bottom: 15px; border-radius: 8px; border: 1px solid #eee; transition: all 0.2s; }
    .doc-item.checked { background: #f0fff4; border-color: #c3e6cb; }
    .doc-item.checked .doc-info p { text-decoration: line-through; color: #999; }

    .doc-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
    .badge { background: #dc3545; color: white; font-size: 0.7rem; padding: 3px 8px; border-radius: 10px; }

    /* Custom Checkbox */
    .checkbox-container { position: relative; padding-left: 35px; cursor: pointer; user-select: none; }
    .checkbox-container input { position: absolute; opacity: 0; cursor: pointer; height: 0; width: 0; }
    .checkmark { position: absolute; top: 0; left: 0; height: 25px; width: 25px; background-color: #eee; border-radius: 4px; }
    .checkbox-container:hover input ~ .checkmark { background-color: #ccc; }
    .checkbox-container input:checked ~ .checkmark { background-color: #28a745; }
    .checkmark:after { content: ""; position: absolute; display: none; }
    .checkbox-container input:checked ~ .checkmark:after { display: block; }
    .checkbox-container .checkmark:after { left: 9px; top: 5px; width: 5px; height: 10px; border: solid white; border-width: 0 3px 3px 0; transform: rotate(45deg); }

    @media (max-width: 768px) {
      .checklist-container { padding: 0; }

      h2 { font-size: 1.5rem; }

      .alert { padding: 12px; font-size: 0.9rem; }

      .category-group { margin-bottom: 30px; }
      .cat-title { font-size: 1rem; }

      .doc-item {
        flex-direction: column;
        gap: 10px;
        padding: 15px;
      }

      .checkbox-container { padding-left: 0; }
      .checkmark { position: relative; display: inline-block; }

      .doc-info { width: 100%; }
      .doc-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }

      .doc-info strong { font-size: 0.95rem; }
      .doc-info p { font-size: 0.85rem; margin-top: 5px; }
    }
  `]
})
export class ChecklistComponent implements OnInit {
  documents: DocItem[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.documents = this.contentService.getDocuments();
  }

  getCategories() {
    return [...new Set(this.documents.map(d => d.category))];
  }

  getDocsByCategory(category: string) {
    return this.documents.filter(d => d.category === category);
  }
}
