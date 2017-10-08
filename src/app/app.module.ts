import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FriendsComponent } from './friends.component';
import { FriendDetailComponent } from './friend.detail.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    FriendDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,RouterModule.forRoot([{
      path : 'friends',
      component : FriendsComponent    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
