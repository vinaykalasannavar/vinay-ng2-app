import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class HeroService {
	heroes: Hero[];

	constructor() {
		this.heroes = [
			new Hero(1, 'Vinay'),
			new Hero(2, 'Don Kojo'),
			new Hero(3, 'S!'),
			new Hero(4, 'Igginarayanan'),
			new Hero(5, 'Sloppy balla!'),
			new Hero(6, 'Yahu'),
			new Hero(7, 'Roopa'),
			new Hero(8, 'Daddy'),
			new Hero(9, ''),
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