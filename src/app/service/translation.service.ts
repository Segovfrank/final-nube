import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public lenguaje = 'es';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.lenguaje);
   }

   public getLanguage(): string {
      return this.lenguaje;
   }

   public setLanguage(lang: string) {
     console.log('Setting to: ' + lang);
     this.lenguaje = lang;
     this.translate.use(lang);
   }
}
