import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'all-heroes',
	templateUrl: './heroes.component.html',
	providers: [HeroService],
})
export class HeroesComponent implements OnInit {

	ngOnInit(): void {
		// this.heroes = this.heroService.getHeroes();
		// this.heroService.getHeroes().then(heroes => loadData(heroes));

		this.heroService.getHeroes().then(heroes => {
			this.heroes = heroes;
			if(this.heroes && this.heroes.length) 
				this.chooseHero(this.heroes[0]);
		});
	}

	heroes: Hero[];
	// heroes: Hero[] = [
	// 	new Hero(1, 'Vinay'),
	// 	new Hero(2, 'Jorge'),
	// 	new Hero(3, 'Mark'),
	// 	new Hero(4, 'Chris'),
	// 	new Hero(5, 'T'),
	// 	new Hero(5, 'Franco'),
	// ]

	constructor(private heroService: HeroService) {
		this.heroService = heroService;
	}

	selectedHero: Hero;

	chooseHero(hero: Hero) {
		this.selectedHero = hero;
	}

	addFamilyMember() {
		const maxId = this.heroes.reduce(function(a, b) { return a < b.id ? b.id : a }, 0);
		let newHero = new Hero(maxId + 1, '');
		this.selectedHero = newHero;
		this.heroes.push(newHero);
	}
}