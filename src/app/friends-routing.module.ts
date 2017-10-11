import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FriendsComponent } from './friends.component';
import { FriendDetailComponent } from './friend.detail.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
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
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]

})
export class FriendsRoutingModule  {}