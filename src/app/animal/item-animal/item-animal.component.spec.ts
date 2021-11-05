import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAnimalComponent } from './item-animal.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ItemAnimalComponent', () => {
  let component: ItemAnimalComponent;
  let fixture: ComponentFixture<ItemAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAnimalComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
