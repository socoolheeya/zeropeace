import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zeropeace';
  private type: string;
  constructor(translate: TranslateService) {
    translate.setDefaultLang('ko');

    const number$ = new Observable(subscriber => {
      if(this.type === 'aws') {
        subscriber.next('aws');
      } else if(this.type === 'gcp') {
        subscriber.next('gcp');
      } else {
        subscriber.next('other');
      }
      setTimeout(()=> {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    this.type = 'aws';
    number$.subscribe({
      next(x) {
        console.log('got value ' + x);
        },
      error(err) {
        console.error('something wrong occurred: ' + err);
        },
      complete() {

        console.log('done');
      }
    });
    console.log('just after subscribe');
  }
}
