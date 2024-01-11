import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateLocalService {
  constructor(private translateService: TranslateService) {}

  getLang(): string {
    return this.translateService.currentLang;
  }

  changeLang() {
    this.translateService.use(this.getLang() === 'pl' ? 'en' : 'pl');
    localStorage.setItem('language', this.getLang());
  }
}
