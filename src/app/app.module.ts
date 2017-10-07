import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero.detail.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,RouterModule.forRoot([{
      path : 'heroes',
      component : HeroesComponent,
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
