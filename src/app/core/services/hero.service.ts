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
      .get<Hero>(this.getUrl(id))
      .pipe(tap((hero) => this.log(`Fetched ${this.descAttributes(hero)}`)));
  }

  // POST /heroes
  create(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(this.heroesUrl, hero)
      .pipe(tap((hero) => this.log(`Create ${this.descAttributes(hero)}`)));
  }

  // PUT /heroes/id
  update(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(this.getUrl(hero.id), hero)
      .pipe(
        tap((hero) =>
          this.log(`Update hero id=${hero.id} to name=${hero.name}`)
        )
      );
  }

  // DELETE /heroes/id
  delete(hero: Hero): Observable<any> {
    return this.http
      .delete<any>(this.getUrl(hero.id))
      .pipe(tap(() => this.log(`Deleted ${this.descAttributes(hero)}`)));
  }

  private descAttributes(hero: Hero): string {
    return `Hero ID=${hero.id} and NAME=${hero.name}`;
  }

  private log(message: string): void {
    this.messageService.add(`LogService: ${message}`);
  }

  private getUrl(id: number): string {
    return `${this.heroesUrl}/${id}`;
  }
}
