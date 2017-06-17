import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({    
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent{
   @Input() hero: Hero;
}




