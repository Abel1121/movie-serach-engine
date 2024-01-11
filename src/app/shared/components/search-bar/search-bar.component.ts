import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input() inputClass?: string;
  @Input() formGroup?: any;
  @Input() title?: string;
  @Input() controlName!: string;
  @Input() placeholder!: string;
  @Input() icon!: string;
  @Input() altIcon!: string;
  @Output() newItemEvent = new EventEmitter<string>();

  clickIcon(value: string) {
    this.newItemEvent.emit(value);
  }
}
