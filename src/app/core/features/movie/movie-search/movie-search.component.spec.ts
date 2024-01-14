import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchComponent } from './movie-search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchBarComponent } from '../../../../shared/components/search-bar/search-bar.component';
import { SelectorComponent } from '../../../../shared/components/selector/selector.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let fixture: ComponentFixture<MovieSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieSearchComponent,
        SearchBarComponent,
        SelectorComponent,
        ButtonComponent,
      ],
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
