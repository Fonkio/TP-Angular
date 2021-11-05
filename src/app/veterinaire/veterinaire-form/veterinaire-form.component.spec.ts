import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaireFormComponent } from './veterinaire-form.component';
import {VeterinaireService} from "../../shared/api/veterinaire.service";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('VeterinaireFormComponent', () => {
  let component: VeterinaireFormComponent;
  let fixture: ComponentFixture<VeterinaireFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinaireFormComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
      providers: [VeterinaireService],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinaireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
