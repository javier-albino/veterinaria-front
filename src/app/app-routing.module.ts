import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetAddComponent } from './pet-add/pet-add.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

const routes: Routes = [
  { path: '', component: PetsListComponent },
  { path: 'add', component: PetAddComponent },
  { path: 'edit/:id', component: PetEditComponent } // Ruta para editar mascota con parámetro id
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
