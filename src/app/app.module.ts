import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Components */
import { HeroDetailComponent } from './components/hero/hero-detail/hero-detail.component';
import { HeroListComponent } from './components/hero/hero-list/hero-list.component';
import { MessagesComponent } from './components/messages/messages.component';
/* Angular Material */
import { AngularMaterialModule } from './modules/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
