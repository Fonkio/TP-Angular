import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListeFichesComponent} from "./liste-fiches/liste-fiches.component";
import {FicheAnimalComponent} from "./fiche-animal/fiche-animal.component";

const animalRoutes: Routes = [
  { path: 'animals', component: ListeFichesComponent },
  { path: 'animals/:id', component: FicheAnimalComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(animalRoutes)
  ]
})
export class AnimalRoutingModule { }
