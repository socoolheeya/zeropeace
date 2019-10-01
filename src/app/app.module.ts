import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { HobbyComponent } from './hobby/hobby.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { SoccerComponent } from './hobby/soccer/soccer.component';
import { BasketballComponent } from './hobby/basketball/basketball.component';
import { GolfComponent } from './hobby/golf/golf.component';
import { TennisComponent } from './hobby/tennis/tennis.component';
import { SurfComponent } from './hobby/surf/surf.component';
import { BadmintonComponent } from './hobby/badminton/badminton.component';
import { SkiComponent } from './hobby/ski/ski.component';
import {CounterComponent} from "./counter/counter.component";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./counter/counter";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MAT_CHECKBOX_CLICK_ACTION, MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MainDirective} from "./main/main.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    UserComponent,
    HobbyComponent,
    SoccerComponent,
    BasketballComponent,
    GolfComponent,
    TennisComponent,
    SurfComponent,
    BadmintonComponent,
    SkiComponent,
    CounterComponent,
    MainDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    StoreModule.forRoot({
      count: counterReducer
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient],
      },
      useDefaultLang: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
