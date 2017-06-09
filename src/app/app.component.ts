import { Component } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [HeroService] 
})
export class AppComponent implements OnInit{
  constructor(private heroService : HeroService){}
  title = 'Tour of Heroes';
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
  this.heroes = this.heroService.getHeroes();
}

ngOnInit(): void {
    this.getHeroes();
  }


}



