import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinaireRootComponent } from './veterinaire-root/veterinaire-root.component';
import {VeterinaireRoutingModule} from "./veterinaire-routing.module";
import { VeterinaireFormComponent } from './veterinaire-form/veterinaire-form.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    VeterinaireRootComponent,
    VeterinaireFormComponent
  ],
    imports: [
        CommonModule,
        VeterinaireRoutingModule,
        ReactiveFormsModule
    ]
})
export class VeterinaireModule { }
