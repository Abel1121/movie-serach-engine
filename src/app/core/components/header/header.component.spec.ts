import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { TranslateLocalService } from '../../services/translate.service';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let translateLocalService: TranslateLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, ButtonComponent],
      imports: [TranslateModule.forRoot()],
      providers: [TranslateLocalService],
    });

    translateLocalService = TestBed.inject(TranslateLocalService);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should title have a text', () => {
    expect(fixture.nativeElement.querySelector('title').innerText).toBe(
      'header.title'
    );
  });

  it('should button have a text', () => {
    expect(fixture.nativeElement.querySelector('button').innerText).toBe(
      'header.language'
    );
  });

  it('should "a" html tag have href props to main page', () => {
    expect(fixture.nativeElement.querySelector('a').getAttribute('href')).toBe(
      '/'
    );
  });

  it('should change language after click on button', () => {
    const spyButton = spyOn(component, 'changeLanguage');
    fixture.nativeElement.querySelector('button').click();
    expect(spyButton).toHaveBeenCalled();
  });
  it('should emit translate.changeLang if run changeLanguage func', () => {
    const spyChangeLang = spyOn(translateLocalService, 'changeLang');
    component.changeLanguage();
    expect(spyChangeLang).toHaveBeenCalled();
  });
});
