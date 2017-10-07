import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'hero-detail',
	templateUrl: './hero.detail.component.html',
	// styleUrls: ['./heroesdetail.component.css'],
})
export class HeroDetailComponent {
	// title = 'Tour of heroes';
	@Input() hero : Hero;
}