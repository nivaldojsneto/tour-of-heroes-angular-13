import { Component } from '@angular/core';
import { Hero } from '../../../interfaces/hero.model';
import { HEROES } from '../../../mocks/mock.heros';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
