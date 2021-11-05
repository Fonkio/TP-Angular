import { TestBed } from '@angular/core/testing';

import { FicheAnimalService } from './fiche-animal.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FicheAnimalService', () => {
  let service: FicheAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule], providers: [FicheAnimalService]  });
    service = TestBed.inject(FicheAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
