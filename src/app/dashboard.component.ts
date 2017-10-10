import { Component, OnInit } from  '@angular/core' ;
import { Friend } from './friend';
import { FriendService } from './friend.service';

@Component({
	selector : 'my-friends-dashboard',
	templateUrl : './dashboard.component.html',
	providers : [FriendService]
})
export class DashboardComponent implements OnInit {

	friends : Friend[];

	constructor(private friendsService: FriendService) { }

	ngOnInit() : void {
		this.friendsService.getFriends().then(friends => this.friends = friends);
	}
}
