import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() class?: string;
  @Input() icon?: string;
  @Input() altIcon?: string;
  @Input() buttonText?: string;
  @Input() iconPosition?: string;
  @Input() disabled = false;
}
