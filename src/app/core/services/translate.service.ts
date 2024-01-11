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
    console.log('this.getLang()0', this.getLang());
    this.translateService.use(this.getLang() === 'pl' ? 'en' : 'pl');
    console.log('this.getLang()1', this.translateService.currentLang);

    localStorage.setItem('language', this.getLang());
  }
}
