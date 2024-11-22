import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  petId: number;
  pet: any = {
    nombre: '',
    tipo: '',
    raza: '',
    edad: null
  };

  constructor(private route: ActivatedRoute, private petService: PetService, private router: Router) {
    // Usar coalescencia nula para evitar errores de asignación
    this.petId = parseInt(this.route.snapshot.paramMap.get('id') ?? '0', 10);
  }

  ngOnInit(): void {
    this.petService.getPetById(this.petId).subscribe((data) => {
      this.pet = data; // Carga los datos de la mascota
    });
  }

  updatePet(): void {
    this.petService.updatePet(this.petId, this.pet).subscribe(() => {
      // Redirigir a la lista de mascotas después de actualizar
      this.router.navigate(['/']);
    });
  }
}
