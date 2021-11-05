import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal} from "../../shared/model/Animal";

@Component({
  selector: 'app-item-animal',
  templateUrl: './item-animal.component.html',
  styleUrls: ['./item-animal.component.scss']
})
export class ItemAnimalComponent implements OnInit {

  @Input()
  animal!: Animal

  @Output() onDelete = new EventEmitter<Animal>();



  constructor() { }

  ngOnInit(): void {
  }

  ondelete($event: MouseEvent) {
    this.onDelete.emit(this.animal)
  }

}
