import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Veterinaire} from "../model/Veterinaire";


@Injectable({
  providedIn: 'root'
})
export class VeterinaireService {

  constructor(private httpClient : HttpClient) {
  }

  getVeterinaire(id: number): Observable<Veterinaire> {
    return this.httpClient.get<Veterinaire>(`/api/veterinarians/${id}`)
  }

  getVeterinaires(): Observable<Veterinaire[]> {
    return this.httpClient.get<Veterinaire[]>(`/api/veterinarians`)
  }

  createVeterinaire(animal: Veterinaire): Observable<Veterinaire>{
    return this.httpClient.post<Veterinaire>(`/api/veterinarians`, animal)
  }

  updateVeterinaire(animal: Veterinaire): Observable<Veterinaire>{
    return this.httpClient.put<Veterinaire>(`/api/veterinarians/${animal.id}`, animal)
  }

  deleteVeterinaire(id: number): Observable<Veterinaire>{
    return this.httpClient.delete<Veterinaire>(`/api/veterinarians/${id}`)
  }
}
