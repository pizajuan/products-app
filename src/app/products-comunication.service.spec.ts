import { TestBed } from '@angular/core/testing';

import { ProductsComunicationService } from './products-comunication.service';

describe('ProductsComunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsComunicationService = TestBed.get(ProductsComunicationService);
    expect(service).toBeTruthy();
  });
});
