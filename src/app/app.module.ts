import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { AddDataCardComponent } from './components/add-data-card/add-data-card.component';
import { DataCardDetailsComponent } from './components/data-card-details/data-card-details.component';
import { DataCardsListComponent } from './components/data-cards-list/data-cards-list.component';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EditDataCardComponent } from './components/edit-data-card/edit-data-card.component';
import { EditMetadataCardComponent } from './components/edit-metadata-card/edit-metadata-card.component';
import { AddMetadataCardComponent } from './components/add-metadata-card/add-metadata-card.component';
import { MetadataCardDetailsComponent } from './components/metadata-card-details/metadata-card-details.component';
import { MetadataCardsListComponent } from './components/metadata-cards-list/metadata-cards-list.component';
import { EditTemplateCardComponent } from './components/edit-template-card/edit-template-card.component';
import { AddTemplateCardComponent } from './components/add-template-card/add-template-card.component';
import { TemplateCardDetailsComponent } from './components/template-card-details/template-card-details.component';
import { TemplateCardsListComponent } from './components/template-cards-list/template-cards-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataCardSearchComponent } from './components/data-card-search/data-card-search.component';
import { SecurityQuestionComponent } from './components/security-question/security-question.component';


@NgModule({
  declarations: [
    AppComponent,
    AddDataCardComponent,
    DataCardDetailsComponent,
    DataCardsListComponent,
    EditDataCardComponent,
    EditMetadataCardComponent,
    AddMetadataCardComponent,
    MetadataCardDetailsComponent,
    MetadataCardsListComponent,
    EditTemplateCardComponent,
    AddTemplateCardComponent,
    TemplateCardDetailsComponent,
    TemplateCardsListComponent,
    MessagesComponent,
    DashboardComponent,
    DataCardSearchComponent,
    SecurityQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
