import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Animal} from "../model/Animal";

@Injectable()
export class FicheAnimalService {

  constructor(private httpClient : HttpClient) {
  }

  getAnimal(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`/api/animals/${id}`)
  }

  getAnimaux(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`/api/animals`)
  }

  createAnimal(animal: Animal): Observable<Animal>{
    return this.httpClient.post<Animal>(`/api/animals`, animal)
  }

  updateAnimal(animal: Animal): Observable<Animal>{
    return this.httpClient.put<Animal>(`/api/animals/${animal.id}`, animal)
  }

  deleteAnimal(id: number): Observable<Animal>{
    return this.httpClient.delete<Animal>(`/api/animals/${id}`)
  }
}
