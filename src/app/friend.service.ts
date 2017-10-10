import { Injectable } from '@angular/core';
import { Friend } from './friend';

@Injectable()
export class FriendService {
	friends: Friend[];

	constructor() {
		this.friends = [
			new Friend(1, 'Vinay'),
			new Friend(2, 'Don Kojo'),
			new Friend(3, 'Sunny boy!'),
			new Friend(4, 'Igginarayanan'),
			new Friend(5, 'Sloppy balla!'),
			new Friend(6, 'Yahu'),
			new Friend(7, 'Roopa'),
			new Friend(8, 'Daddy'),
			new Friend(9, ''),
			new Friend(10, 'Navalgatti Ajja'),
		]
	}

	getFriends(): Promise < Friend[] > {
		return Promise.resolve(this.friends);

		// return new Promise(resolve => {
		// 	setTimeout(() => { console.log(`resolving promise at ${new Date}`);
		// 		return this.friends; }, 2500)
		// });
	}

	getFriend(id): Promise < Friend > {
		return this.getFriends().then(friends => friends.find(f => f.id == id))
	}
}