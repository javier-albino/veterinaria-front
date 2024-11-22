import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  pets: any[] = [];

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit(): void {
    this.petService.getPets().subscribe((data) => {
      this.pets = data;
    });
  }

  deletePet(id: number): void {
    this.petService.deletePet(id).subscribe(() => {
      this.pets = this.pets.filter(pet => pet.id !== id);
    });
  }

  // Navegar al componente de edición de la mascota
  goToEditPet(id: number): void {
    this.router.navigate([`/edit/${id}`]);
  }
}
