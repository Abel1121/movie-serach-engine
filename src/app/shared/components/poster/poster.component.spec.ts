import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterComponent } from './poster.component';
import { NgOptimizedImage } from '@angular/common';

describe('PosterComponent', () => {
  let component: PosterComponent;
  let fixture: ComponentFixture<PosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosterComponent],
      imports: [NgOptimizedImage],
    });
    fixture = TestBed.createComponent(PosterComponent);
    component = fixture.componentInstance;
    component.poster = 'somePosterUrl';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
