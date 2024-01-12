import { TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateLocalService } from './translate.service';

describe('TranslateLocalService', () => {
  let translateLocalService: TranslateLocalService;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslateLocalService],
      imports: [TranslateModule.forRoot()],
    });

    translateLocalService = TestBed.inject(TranslateLocalService);
    translateService = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(translateLocalService).toBeTruthy();
  });

  // for correct testing need to add library  ngx-translate-testing
});
