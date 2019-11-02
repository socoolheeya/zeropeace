import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonService } from "../../common/common.service";
import {AnotherCommonService} from "../../common/another-common.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {SoccerComponent} from "../soccer/soccer.component";

@Component({
  selector: 'app-surf',
  templateUrl: './surf.component.html',
  styleUrls: ['./surf.component.scss'],
  providers: [{
    provide: CommonService,
    useClass: AnotherCommonService
  }]
})
export class SurfComponent {
  str = 36000;
  greeting: string;
  today: any;
  isOpen = true;

  @ViewChild(SoccerComponent, {static: false})
  set item(v: SoccerComponent) {
    setTimeout(() => {
      this.isOpen = false;
    }, 100);
  }

  constructor(private commonService: CommonService) {
    console.log(commonService instanceof AnotherCommonService);
  }

  ngOnInit() {
    let a = setInterval(() => {
      let today = new Date();
      this.today = today;
    }, 1000);

    this.str = 100000;
    //this.str1 = '';
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  getWeatherInfo() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  sayHi() {
    return this.greeting = this.commonService.sayHello('heeya');
  }

}
