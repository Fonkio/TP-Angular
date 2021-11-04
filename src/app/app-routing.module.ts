import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'animals', pathMatch: 'full' },
  { path: 'veterinaire',
    loadChildren: () =>
      import('./veterinaire/veterinaire.module')
        .then((tsModule) => tsModule.VeterinaireModule),
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
