import { TestBed, inject } from '@angular/core/testing';

import { ProdukService } from './produk.service';

describe('ProdukService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdukService]
    });
  });

  it('should be created', inject([ProdukService], (service: ProdukService) => {
    expect(service).toBeTruthy();
  }));
});
