import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { FriendService } from './friend.service';
import { Friend } from './friend';


@Component({
	selector: 'friend-detail',
	templateUrl: './friend.detail.component.html',
	providers: [FriendService],
})
export class FriendDetailComponent implements OnInit {
	constructor(
		private friendService: FriendService,
		private route: ActivatedRoute,
		private location: Location) {}
		// title = 'Friends den!';
	@Input() friend: Friend;

	ngOnInit(): void {
		  this.route.paramMap
		  .switchMap((params: ParamMap) => this.friendService.getFriend(+params.get('id')))
		  .subscribe(friend => this.friend = friend);
	}

	goBack(): void {
		this.location.back();
	}
}