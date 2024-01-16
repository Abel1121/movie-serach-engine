import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterComponent } from './poster.component';
import { NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

describe('PosterComponent', () => {
  let component: PosterComponent;
  let fixture: ComponentFixture<PosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosterComponent],
      imports: [NgOptimizedImage, TranslateModule.forRoot()],
    });
    fixture = TestBed.createComponent(PosterComponent);
    component = fixture.componentInstance;
    component.poster = 'somePosterUrl';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render no poster span with correct class', () => {
    const showPoster = 'showPoster';
    component.poster = 'N/A';
    component.showPoster = showPoster;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('span')).toBeDefined();
    expect(fixture.nativeElement.querySelector('span').innerText).toBe(
      'poster.noPoster'
    );
    expect(
      fixture.nativeElement.querySelector('span').getAttribute('class')
    ).toBe(showPoster);
  });

  it('should render img', () => {
    const showPoster = 'showPoster';
    const title = 'altPoster';
    component.showPoster = showPoster;
    component.title = title;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img')).toBeDefined();
    expect(
      fixture.nativeElement.querySelector('img').getAttribute('class')
    ).toBe(`movie-image ${showPoster}`);
    expect(fixture.nativeElement.querySelector('img').getAttribute('src')).toBe(
      `somePosterUrl`
    );
    expect(fixture.nativeElement.querySelector('img').getAttribute('alt')).toBe(
      `${title} poster`
    );
    expect(
      fixture.nativeElement.querySelector('img').getAttribute('title')
    ).toBe(title);
  });
});
