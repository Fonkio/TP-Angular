import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FicheAnimalService} from "../../shared/api/fiche-animal.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Animal} from "../../shared/model/Animal";

@Component({
  selector: 'app-fiche-animal',
  templateUrl: './fiche-animal.component.html',
  styleUrls: ['./fiche-animal.component.scss']
})
export class FicheAnimalComponent implements OnInit {

  id: number = 0

  animal!: Animal



  constructor(private animalService: FicheAnimalService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) =>
      this.animalService.getAnimal(Number(params.get('id'))).subscribe(data => {
        this.animal = data
      })
    );
  }


  ngOnInit(): void {

  }


  ondelete() {
    console.log("test")
    this.animalService.deleteAnimal(this.animal.id)
  }
}
