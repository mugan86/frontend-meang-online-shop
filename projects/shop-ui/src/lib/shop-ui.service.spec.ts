import { TestBed } from '@angular/core/testing';

import { ShopUiService } from './shop-ui.service';

describe('ShopUiService', () => {
  let service: ShopUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
