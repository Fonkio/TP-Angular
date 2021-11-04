import { Component, OnInit } from '@angular/core';
import {FicheAnimalService} from "../../shared/api/fiche-animal.service";
import {Animal} from "../fiche-animal/fiche-animal.component";

@Component({
  selector: 'app-liste-fiches',
  templateUrl: './liste-fiches.component.html',
  styleUrls: ['./liste-fiches.component.scss']
})
export class ListeFichesComponent implements OnInit {

  animaux! : Animal[]
  isLoading : boolean = true

  constructor(private animalService: FicheAnimalService) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.isLoading = true
    this.animalService.getAnimaux().subscribe(data => {
      this.animaux = data
      this.isLoading = false
    });
  }

  onDelete(animalToDelete: Animal) {
      this.animalService.deleteAnimal(animalToDelete.id).subscribe(() => {
        this.fetchData()
      })

  }
}
