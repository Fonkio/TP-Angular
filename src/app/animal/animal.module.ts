import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FicheAnimalComponent } from './fiche-animal/fiche-animal.component';
import { ListeFichesComponent } from './liste-fiches/liste-fiches.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import { ItemAnimalComponent } from './item-animal/item-animal.component';
import {AnimalRoutingModule} from "./animal-routing.module";
import { FicheAnimalFormComponent } from './fiche-animal-form/fiche-animal-form.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FicheAnimalComponent,
    ListeFichesComponent,
    ItemAnimalComponent,
    FicheAnimalFormComponent
  ],
  exports: [
    FicheAnimalComponent,
    ListeFichesComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        AnimalRoutingModule,
        FormsModule
    ]
})
export class AnimalModule { }
