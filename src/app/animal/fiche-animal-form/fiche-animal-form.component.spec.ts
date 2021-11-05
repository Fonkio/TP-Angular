import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAnimalFormComponent } from './fiche-animal-form.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {FicheAnimalService} from "../../shared/api/fiche-animal.service";
import {FormsModule} from "@angular/forms";

describe('FicheAnimalFormComponent', () => {
  let component: FicheAnimalFormComponent;
  let fixture: ComponentFixture<FicheAnimalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheAnimalFormComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [FicheAnimalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
