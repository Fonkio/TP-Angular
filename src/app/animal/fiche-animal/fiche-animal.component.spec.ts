import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAnimalComponent } from './fiche-animal.component';
import {RouterTestingModule} from "@angular/router/testing";
import {FicheAnimalService} from "../../shared/api/fiche-animal.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AnimalModule} from "../animal.module";
import {PhoneNumberPipe} from "../../shared/phone-number.pipe";
import {SharedModule} from "../../shared/shared.module";

describe('FicheAnimalComponent', () => {
  let component: FicheAnimalComponent;
  let fixture: ComponentFixture<FicheAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheAnimalComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      providers: [FicheAnimalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
