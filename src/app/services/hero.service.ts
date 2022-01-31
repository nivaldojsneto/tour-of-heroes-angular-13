import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.model';
import { HEROES } from '../mocks/mock.heros';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
