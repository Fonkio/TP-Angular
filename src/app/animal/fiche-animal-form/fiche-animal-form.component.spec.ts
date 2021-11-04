import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAnimalFormComponent } from './fiche-animal-form.component';

describe('FicheAnimalFormComponent', () => {
  let component: FicheAnimalFormComponent;
  let fixture: ComponentFixture<FicheAnimalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheAnimalFormComponent ]
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
