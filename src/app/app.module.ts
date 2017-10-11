import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FriendsComponent } from './friends.component';
import { FriendDetailComponent } from './friend.detail.component';
import { DashboardComponent } from './dashboard.component';

import { AppComponent } from './app.component';
import { FriendsRoutingModule } from './friends-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    FriendDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FriendsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
