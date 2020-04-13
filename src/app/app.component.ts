import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { marker as _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';
import { marker} from '@biesbjerg/ngx-translate-extract-marker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'translation-demo';
  messageBoxContent = marker('One');
  // messageBoxContent = marker('messagebox.warning.text');
  constructor(public translate:TranslateService){
    translate.addLangs(['en','fr','es']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|es/ ) ? browserLang :'en');
   

  }


  // useLanguage(language: string) {
  //   this.translate.use(language);
  // }

}
