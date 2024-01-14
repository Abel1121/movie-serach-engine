import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './core/components/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoaderService } from './core/services/loader.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let loaderService: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent],
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    loaderService = TestBed.inject(LoaderService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render app-spinner if loaderService.isLoading equal true', () => {
    loaderService.isLoading.next(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-spinner')).toBeDefined();
  });

  it('shouldn`t render app-spinner if loaderService.isLoading equal false', () => {
    loaderService.isLoading.next(false);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-spinner')).toBeNull();
  });
});
