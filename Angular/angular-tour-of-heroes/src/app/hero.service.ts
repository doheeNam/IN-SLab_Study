import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class HeroService {

  private log(message: string){
    this.messageService.add('HeroService: ${message}');
  }

  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = '${this.heroesUrl}/${id}';
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log('getched hero id = ${id}')),
      catchError(this.handleError<Hero>('getHero id = ${id}'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);

      this.log('${operation} failed: %{error.message}');

      return of(result as T);
    }
  }

  updateHero(hero: Hero): Observable<any>{
    return this.http.put(this.heroesUrl, hero, this.httpOption).pipe(
      tap(_=>this.log('updated hero id=${hero.id}')),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  httpOption = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOption).pipe(
      tap((newHero: Hero)=>this.log('added hero w/ id=${newHero.id}')),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero:Hero|number): Observable<Hero>{
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = '${this.heroesUrl}/${id}';

    return this.http.delete<Hero>(url, this.httpOption).pipe(
      tap(_=>this.log('deleted hero id=${id}')),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/