import { TestBed } from '@angular/core/testing';

import { TranslateLocalService } from './translate.service';

describe('TranslateService', () => {
  let service: TranslateLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
