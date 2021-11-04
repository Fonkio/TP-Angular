import {Component, Input, OnInit} from '@angular/core';
import {Animal} from "../fiche-animal/fiche-animal.component";
import {FicheAnimalService} from "../../shared/api/fiche-animal.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-fiche-animal-form',
  templateUrl: './fiche-animal-form.component.html',
  styleUrls: ['./fiche-animal-form.component.scss']
})
export class FicheAnimalFormComponent implements OnInit {

  model: Animal;
  id: number;

  constructor(private animalService: FicheAnimalService, private routeur: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(
      (param) => {
        this.id = +param.get("id")
        if (this.id && !Number.isNaN((this.id))) {
          this.animalService.getAnimal(this.id).subscribe( (animal: Animal) => this.model = animal)
        } else {
          this.model =
            {
              comment: "",
              email: "",
              name: "",
              phoneNumber: "",
              species: "",
              veterinarian: "",
              id: undefined
            }
        }
      }
    )

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.model.id === undefined) {
      this.animalService.createAnimal(this.model).subscribe()
    } else {
      this.animalService.updateAnimal(this.model).subscribe()
    }
    this.routeur.navigate(["/animals"])
  }
}
