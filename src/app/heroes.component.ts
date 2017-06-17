import { Component } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers : [HeroService] 
})
export class HeroesComponent implements OnInit{
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  hero: Hero = {
  id: 1,
  name: 'Windstorm'
};
heroes : Hero[];
selectedHero: Hero;
onSelect(hero: Hero): void {
  console.log("CLick")
  this.selectedHero = hero;
}


getHeroes():void{
  this.heroService.getHeroes().then(heroes =>this.heroes = heroes);
}

ngOnInit(): void {
    this.getHeroes();
  }

gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}

}



