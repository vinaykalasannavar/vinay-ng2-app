import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class HeroService {
	heroes: Hero[];

	constructor() {
		this.heroes = [
			new Hero(1, 'Vinay'),
			new Hero(2, 'Vishal'),
			new Hero(3, 'Sneh'),
			new Hero(4, 'Nandini'),
			new Hero(5, 'Deka Amma!'),
			new Hero(6, 'Madhu'),
			new Hero(7, 'Veer'),
			new Hero(8, 'Daddy'),
			new Hero(9, 'Mummy'),
			new Hero(10, 'Navalgatti Ajja'),
		]
	}

	getHeroes(): Promise < Hero[] > {
		return Promise.resolve(this.heroes);
		
		// return new Promise(resolve => {
		// 	setTimeout(() => { console.log(`resolving promise at ${new Date}`);
		// 		return this.heroes; }, 2500)
		// });
	}
}