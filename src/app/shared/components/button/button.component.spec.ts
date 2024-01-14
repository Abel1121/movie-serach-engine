import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should button be disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').disabled).toBe(true);
  });

  it('should render img if icon have value', () => {
    component.icon = 'some value';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img')).toBeDefined();
  });

  it('should`t render img if icon haven`t value', () => {
    component.icon = '';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img')).toBeNull();
  });

  it('should render img if icon have value with src,icon and iconPosition property', () => {
    component.icon = 'some value';
    component.iconPosition = 'reverse';
    component.altIcon = 'altIcon';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img')).toBeDefined();
    expect(
      fixture.nativeElement.querySelector('img').getAttribute('src')
    ).toEqual('some value');
    expect(
      fixture.nativeElement.querySelector('img').getAttribute('alt')
    ).toEqual('altIcon');
    expect(
      fixture.nativeElement.querySelector('img').getAttribute('class')
    ).toContain('reverse');
  });
  it('should render text if buttonText have value', () => {
    component.buttonText = 'some button text';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').innerText).toBe(
      'some button text'
    );
  });
  it('shouldn`t render text if buttonText haven`t value', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').innerText).toBe('');
  });
});
