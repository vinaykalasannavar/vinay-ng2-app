import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Friend } from './friend';
import { FriendService } from './friend.service';
import { FriendDetailComponent } from './friend.detail.component';

@Component({
	selector: 'all-friends',
	templateUrl: './friends.component.html',
	providers: [FriendService],
})
export class FriendsComponent implements OnInit {

	ngOnInit(): void {

		this.friendService.getFriends().then(friends => {
			this.friends = friends;
			if(this.friends && this.friends.length) 
				this.chooseFriend(this.friends[0]);
		});
	}

	friends: Friend[];

	constructor(private friendService: FriendService) {
		this.friendService = friendService;
	}

	selectedFriend: Friend;

	chooseFriend(friend: Friend) {
		this.selectedFriend = friend;
	}

	makeNewFriend() {
		const maxId = this.friends.reduce(function(a, b) { return a < b.id ? b.id : a }, 0);
		let newFriend = new Friend(maxId + 1, '');
		this.selectedFriend = newFriend;
		this.friends.push(newFriend);
	}
}