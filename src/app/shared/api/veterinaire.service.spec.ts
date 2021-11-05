import { TestBed } from '@angular/core/testing';

import { VeterinaireService } from './veterinaire.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('VeterinaireService', () => {
  let service: VeterinaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule]});
    service = TestBed.inject(VeterinaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
