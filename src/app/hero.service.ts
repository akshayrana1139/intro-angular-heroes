import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import 'rxjs/add/operator/toPromise';


export class HeroService {

  private headers = new Headers({ 'Content-Type': 'application/json' })
  private heroesUrl = 'api/heroes';  // URL to web api [create using Express/Flask]
  private http: Http

  // Unable to inject Http in constructor.
  // constructor(private http: Http) { }


  getHeroesHttp(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()    // Observable to Promise using this method
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // We are getting all the heroes and then filtering based on ID, better to ask server for hero with particular ID. Chk new Method
  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroHttp(id: number): Promise<Hero> {
    const url = "${heroesUrl}/${id}"
    return this.http.get(url).toPromise().then(r => r.json().data as Hero).catch(this.handleError)
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), this.headers).toPromise().then(() => hero).catch(this.handleError)

  }

  create(name: String): Promise<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({ "name": name }), this.headers).toPromise().then(r => r.json().data as Hero).catch(this.handleError);

  }
}