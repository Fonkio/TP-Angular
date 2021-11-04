import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListeFichesComponent} from "./liste-fiches/liste-fiches.component";
import {FicheAnimalComponent} from "./fiche-animal/fiche-animal.component";
import {FicheAnimalFormComponent} from "./fiche-animal-form/fiche-animal-form.component";

const animalRoutes: Routes = [
  { path: 'animals', component: ListeFichesComponent },
  { path: 'animals/new', component: FicheAnimalFormComponent },
  { path: 'animals/:id', component: FicheAnimalComponent },
  { path: 'animals/edit/:id', component: FicheAnimalFormComponent }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(animalRoutes)
  ]
})
export class AnimalRoutingModule { }
