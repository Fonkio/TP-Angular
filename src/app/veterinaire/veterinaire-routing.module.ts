import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {VeterinaireRootComponent} from "./veterinaire-root/veterinaire-root.component";

const routes: Routes = [{path:'', component: VeterinaireRootComponent }]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VeterinaireRoutingModule { }
