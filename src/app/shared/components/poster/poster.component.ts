import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent {
  @Input() poster!: string;
  @Input() title = '';
  @Input() showPoster = '';
}
