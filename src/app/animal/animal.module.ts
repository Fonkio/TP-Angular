import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FicheAnimalComponent } from './fiche-animal/fiche-animal.component';
import { ListeFichesComponent } from './liste-fiches/liste-fiches.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import { ItemAnimalComponent } from './item-animal/item-animal.component';
import {AnimalRoutingModule} from "./animal-routing.module";



@NgModule({
  declarations: [
    FicheAnimalComponent,
    ListeFichesComponent,
    ItemAnimalComponent
  ],
  exports: [
    FicheAnimalComponent,
    ListeFichesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AnimalRoutingModule
  ]
})
export class AnimalModule { }
