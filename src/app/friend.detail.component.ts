import { Component, Input } from '@angular/core';
import { Friend } from './friend';

@Component({
	selector: 'friend-detail',
	templateUrl: './friend.detail.component.html',
	// styleUrls: ['./friend.detail.component.css'],
})
export class FriendDetailComponent {
	// title = 'Friends den!';
	@Input() friend : Friend;
}