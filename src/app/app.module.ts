import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AnimalModule} from "./animal/animal.module";
import {FicheAnimalService} from "./shared/api/fiche-animal.service";
import { LinkMailDirective } from './shared/link-mail.directive';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AnimalModule,
    HttpClientModule
  ],
  providers: [FicheAnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
