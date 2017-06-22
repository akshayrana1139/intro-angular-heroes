import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
import { Hero }           from './hero'

export class HeroSearchService {

private http : Http
// constructor(private http:Http){}

search(term : String) : Observable<Hero[]>{
    //  RxJS operator chaining makes response processing easy and readable
    return this.http.get("app/heroes/?name = ${term}").map(response => response.json().data as Hero[]);
}

}