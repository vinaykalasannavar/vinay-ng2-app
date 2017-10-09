import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FriendsComponent } from './friends.component';
import { FriendDetailComponent } from './friend.detail.component';
import { DashboardComponent } from './dashboard.component';

import { AppComponent } from './app.component';

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
        RouterModule.forRoot([{
          path: 'friends',
          component: FriendsComponent
        }, {
          path: 'dashboard',
          component: DashboardComponent
        }, {
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
        }, {
          path: 'friend/:id',
          component: FriendDetailComponent
        }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
