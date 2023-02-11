import { TestBed } from '@angular/core/testing';

import { SingleproductService } from './singleproduct.service';

describe('SingleproductService', () => {
  let service: SingleproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
