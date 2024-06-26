import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let route: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent, SpinnerComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule],
      providers: [{ provide: Router, useValue: { navigate: () => true } }],
    });

    fixture = TestBed.createComponent(PageNotFoundComponent);
    route = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should h1 have a text', () => {
    expect(fixture.nativeElement.querySelector('h1').innerText).toBe(
      'error.404',
    );
  });

  it('should app spinner render', () => {
    expect(fixture.nativeElement.querySelector('app-spinner')).toBeDefined();
  });

  it('should h2 have a text', () => {
    expect(fixture.nativeElement.querySelector('h2').innerText).toBe(
      'error.redirect',
    );
  });

  it('should ngOnInit start redirectToHomePage function', () => {
    const spyRedirectToHomePage = spyOn(component, 'redirectToHomePage');
    component.ngOnInit();
    expect(spyRedirectToHomePage).toHaveBeenCalled();
  });

  it('should redirectToHomePage function redirect to home page', fakeAsync(() => {
    route.navigate(['asdasd']);
    const spyRouter = spyOn(component['router'], 'navigate');

    component.redirectToHomePage();
    tick(component.redirectAfter);
    expect(spyRouter).toHaveBeenCalledWith(['/']);
  }));
});
