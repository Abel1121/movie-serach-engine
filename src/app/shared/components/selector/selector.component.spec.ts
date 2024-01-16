import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorComponent } from './selector.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

describe('SelectorComponent', () => {
  let component: SelectorComponent;
  let fixture: ComponentFixture<SelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorComponent],
      imports: [ReactiveFormsModule, TranslateModule.forRoot()],

      schemas: [],
    });
    fixture = TestBed.createComponent(SelectorComponent);
    component = fixture.componentInstance;
    component.formGroup = new FormGroup<any>({ firstName: new FormControl() });
    component.controlName = 'firstName';
    component.icon = 'icon';
    component.altIcon = 'altIcon';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 selectors', () => {
    expect(fixture.nativeElement.querySelectorAll('option').length).toBe(4);
  });

  it('should render image', () => {
    expect(fixture.nativeElement.querySelectorAll('img')).toBeDefined();
  });

  it('should render select', () => {
    expect(fixture.nativeElement.querySelectorAll('select')).toBeDefined();
  });
});
