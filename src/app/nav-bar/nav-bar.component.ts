import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../service/translation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public currentLang = 'es';
  private translationService: TranslationService;

  constructor(_translationService: TranslationService, private translate: TranslateService) { 
    this.translationService = _translationService;
    this.translate.setDefaultLang(this.translationService.getLanguage());
  }

  changeLang(){
    if(this.currentLang == 'es'){
      this.currentLang = 'en';
    } else {
      this.currentLang = 'es';
    }
    this.translationService.setLanguage(this.currentLang);
  }

  ngOnInit() {
  }

}
