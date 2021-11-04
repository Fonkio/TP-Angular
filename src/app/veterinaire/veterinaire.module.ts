import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinaireRootComponent } from './veterinaire-root/veterinaire-root.component';
import {VeterinaireRoutingModule} from "./veterinaire-routing.module";



@NgModule({
  declarations: [
    VeterinaireRootComponent
  ],
  imports: [
    CommonModule,
    VeterinaireRoutingModule
  ]
})
export class VeterinaireModule { }
