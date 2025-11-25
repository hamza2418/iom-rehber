import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // Checklist için gerekli

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { FaqComponent } from './components/faq/faq.component';
import { TipsComponent } from './components/tips/tips.component';
import { ContactComponent } from './components/contact/contact.component';

import { ContentService } from './services/content.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent,
    HomeComponent,
    RoadmapComponent,
    ChecklistComponent,
    FaqComponent,
    TipsComponent,
    ContactComponent
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
