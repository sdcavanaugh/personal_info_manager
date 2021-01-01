import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AddDataCardComponent } from './components/add-data-card/add-data-card.component';
import { DataCardDetailsComponent } from './components/data-card-details/data-card-details.component';
import { DataCardsListComponent } from './components/data-cards-list/data-cards-list.component';
import { EditDataCardComponent } from './components/edit-data-card/edit-data-card.component';

import { AddMetadataCardComponent } from './components/add-metadata-card/add-metadata-card.component';
import { MetadataCardDetailsComponent } from './components/metadata-card-details/metadata-card-details.component';
import { MetadataCardsListComponent } from './components/metadata-cards-list/metadata-cards-list.component';
import { EditMetadataCardComponent } from './components/edit-metadata-card/edit-metadata-card.component';

import { AddTemplateCardComponent } from './components/add-template-card/add-template-card.component';
import { TemplateCardDetailsComponent } from './components/template-card-details/template-card-details.component';
import { TemplateCardsListComponent } from './components/template-cards-list/template-cards-list.component';
import { EditTemplateCardComponent } from './components/edit-template-card/edit-template-card.component';

// order makes a difference!
// TODO - explore pathMatch usage
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'data', component: DataCardsListComponent },
  { path: 'data/add', component: AddDataCardComponent },
  { path: 'data/edit/:id', component: EditDataCardComponent },
  { path: 'data/:id', component: DataCardDetailsComponent },
  { path: 'metadata', component: MetadataCardsListComponent },
  { path: 'metadata/add', component: AddMetadataCardComponent },
  { path: 'metadata/edit/:id', component: EditMetadataCardComponent },
  { path: 'metadata/:id', component: MetadataCardDetailsComponent },
  { path: 'templates', component: TemplateCardsListComponent },
  { path: 'templates/add', component: AddTemplateCardComponent },
  { path: 'templates/edit/:id', component: EditTemplateCardComponent },
  { path: 'templates/:id', component: TemplateCardDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
