import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFichesComponent } from './liste-fiches.component';
import {FicheAnimalService} from "../../shared/api/fiche-animal.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ListeFichesComponent', () => {
  let component: ListeFichesComponent;
  let fixture: ComponentFixture<ListeFichesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFichesComponent ],
      imports: [HttpClientTestingModule],
      providers: [FicheAnimalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFichesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
