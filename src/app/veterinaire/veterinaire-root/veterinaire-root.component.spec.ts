import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaireRootComponent } from './veterinaire-root.component';

describe('VeterinaireRootComponent', () => {
  let component: VeterinaireRootComponent;
  let fixture: ComponentFixture<VeterinaireRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinaireRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinaireRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
