import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { FaqComponent } from './components/faq/faq.component';
import { TipsComponent } from './components/tips/tips.component';
import { ContactComponent } from './components/contact/contact.component';
import { IdataGuideComponent } from './components/idata-guide/idata-guide.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'yol-haritasi', component: RoadmapComponent },
  { path: 'idata-rehberi', component: IdataGuideComponent },
  { path: 'belge-listesi', component: ChecklistComponent },
  { path: 'ipuclari', component: TipsComponent },
  { path: 'sss', component: FaqComponent },
  { path: 'iletisim', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
