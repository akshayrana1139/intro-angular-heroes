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

add(name:String) : void{
  name = name.trim()
  if(!name) {return;}
  this.heroService.create(name).then(hero => this.heroes.push(hero)); // Pushing the new hero to the Heroes array
  this.selectedHero = null;
}

delete(hero:Hero) : void {
  this.heroService.delete(hero.id).then(()=>this.heroes = this.heroes.filter(h=> h !== hero))
  
}

}



