import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {VeterinaireRootComponent} from "./veterinaire-root/veterinaire-root.component";
import {VeterinaireFormComponent} from "./veterinaire-form/veterinaire-form.component";

const routes: Routes = [
  {
    path:'new', component: VeterinaireFormComponent
  },
  {
    path:'', component: VeterinaireRootComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VeterinaireRoutingModule { }
