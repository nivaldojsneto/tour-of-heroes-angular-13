import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Hero } from '../models/hero.model';
import { environment } from './../../../environments/environment';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  // GET /heroes
  getAll(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log('Starting the logs service')));
  }

  // GET /heroes/id
  getOne(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(
        tap((hero) => this.log(`fetched hero id=${id} and name=${hero.name}`))
      );
  }

  // PUT /heroes/id
  update(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(`${this.heroesUrl}/${hero.id}`, hero)
      .pipe(
        tap((hero) =>
          this.log(`update hero id=${hero.id} to name=${hero.name}`)
        )
      );
  }

  private log(message: string): void {
    this.messageService.add(`LogService: ${message}`);
  }
}
