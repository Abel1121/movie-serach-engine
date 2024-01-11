import { Component } from '@angular/core';
import { TranslateLocalService } from '../../services/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private translate: TranslateLocalService) {}

  changeLanguage() {
    this.translate.changeLang();
  }
}
