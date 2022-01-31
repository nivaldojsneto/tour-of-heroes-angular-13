import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.model';
import { HEROES } from '../mocks/mock.heros';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}
