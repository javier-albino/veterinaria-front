import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private apiUrl = 'http://localhost:3000/api/pets'; // URL de tu API Express

  constructor(private http: HttpClient) { }

  // Obtener todas las mascotas
  getPets(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Obtener mascota por ID
  getPetById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Agregar una nueva mascota
  addPet(pet: any): Observable<any> {
    return this.http.post(this.apiUrl, pet);
  }

  // Actualizar una mascota existente
  updatePet(id: number, pet: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, pet);
  }

  // Eliminar una mascota
  deletePet(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
