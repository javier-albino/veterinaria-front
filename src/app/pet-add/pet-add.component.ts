import { Component } from '@angular/core';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent {
  newPet = {
    nombre: '',
    tipo: '',
    raza: '',
    edad: null
  };

  constructor(private petService: PetService, private router: Router) {}

  addPet(): void {
    this.petService.addPet(this.newPet).subscribe(() => {
      // Redirigir a la lista de mascotas una vez agregada
      this.router.navigate(['/']);
    });
  }
}
