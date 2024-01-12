import { Component, Input } from '@angular/core';
import { movieTypeEnum } from '../../enum/movie-type';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent {
  protected readonly movieTypeEnum = movieTypeEnum;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() icon!: string;
  @Input() altIcon!: string;
}
