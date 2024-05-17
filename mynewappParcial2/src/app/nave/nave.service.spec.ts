/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NaveService } from './nave.service';

describe('Service: Nave', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaveService]
    });
  });

  it('should ...', inject([NaveService], (service: NaveService) => {
    expect(service).toBeTruthy();
  }));
});
