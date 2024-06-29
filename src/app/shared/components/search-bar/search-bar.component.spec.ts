import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    component.formGroup = new FormGroup<any>({ firstName: new FormControl() });
    component.controlName = 'firstName';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form', () => {
    expect(fixture.nativeElement.querySelectorAll('form')).toBeDefined();
  });

  it('should not render title', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeNull();
  });

  it('should render title with text', () => {
    const titleText = 'some title';
    component.title = titleText;
    expect(fixture.nativeElement.querySelector('h1')).toBeDefined();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1').innerText).toBe(titleText);
  });

  it('should not render icon', () => {
    expect(fixture.nativeElement.querySelector('i')).toBeNull();
  });

  it('should render icon with img', () => {
    const icon = 'someIcon';
    const altIcon = 'altIcon';
    component.icon = icon;
    component.altIcon = altIcon;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('i')).toBeDefined();
    expect(fixture.nativeElement.querySelector('img')).toBeDefined();
    expect(
      fixture.nativeElement.querySelector('img').getAttribute('class'),
    ).toBe(`form-icon ${icon}`);
    expect(fixture.nativeElement.querySelector('img').getAttribute('src')).toBe(
      icon,
    );
    expect(fixture.nativeElement.querySelector('img').getAttribute('alt')).toBe(
      altIcon,
    );
  });
  it('should render label', () => {
    expect(fixture.nativeElement.querySelector('label')).toBeDefined();
  });
  it('should render input with correct attributes', () => {
    const controlName = 'firstName';
    const inputClass = 'inputClass';
    const placeholder = 'placeholder';
    component.controlName = controlName;
    component.inputClass = inputClass;
    component.placeholder = placeholder;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('input')).toBeDefined();
    expect(
      fixture.nativeElement
        .querySelector('input')
        .getAttribute('ng-reflect-name'),
    ).toBe(controlName);
    expect(
      fixture.nativeElement.querySelector('input').getAttribute('class'),
    ).toBe(`form-input ng-untouched ng-pristine ng-valid ${inputClass}`);
    expect(
      fixture.nativeElement.querySelector('input').getAttribute('placeHolder'),
    ).toBe(placeholder);
  });
});
