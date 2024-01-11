import { Component, OnInit } from '@angular/core';
import { MovieSearchFormModel } from './movie-search-form.form-model';
import { ActivatedRoute, Router } from '@angular/router';
import { movieTypeEnum } from '../../../../shared/enum/movie-type';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent implements OnInit {
  //todo selector move to separate component
  formModel = new MovieSearchFormModel();
  openSettings = false;
  movieTypeEnum = movieTypeEnum;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.formModel = new MovieSearchFormModel(this.route.snapshot?.queryParams);
  }

  onSave() {
    const form = this.filterForm(this.formModel.formGroup.value);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        ...form,
        page: 1,
      },
    });
  }

  openSettingsFunc() {
    this.openSettings = !this.openSettings;
  }
  filterForm(obj: any) {
    const filtered: any = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== null && obj[key] !== '') {
        filtered[key] = obj[key];
      }
    });
    return filtered;
  }
}
