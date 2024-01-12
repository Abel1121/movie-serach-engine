import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let loaderService: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderService],
    });

    loaderService = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(loaderService).toBeTruthy();
  });

  it('isLoading should be initially false', () => {
    expect(loaderService.isLoading.value).toBe(false);
  });

  it('busy() should increment busyRequestCount and set isLoading to true', fakeAsync(() => {
    loaderService.busy();
    expect(loaderService.busyRequestCount).toBe(1);
    tick(100);
    expect(loaderService.isLoading.value).toBe(true);
  }));

  it('idle() should decrement busyRequestCount and set isLoading to false when busyRequestCount is 0', () => {
    loaderService.busyRequestCount = 1;
    loaderService.idle();
    expect(loaderService.busyRequestCount).toBe(0);
    expect(loaderService.isLoading.value).toBe(false);
  });

  it('idle() should not set isLoading to false when busyRequestCount is greater than 0', fakeAsync(() => {
    loaderService.busyRequestCount = 2;
    loaderService.idle();
    tick(100);
    expect(loaderService.isLoading.value).toBe(false);
  }));
});
