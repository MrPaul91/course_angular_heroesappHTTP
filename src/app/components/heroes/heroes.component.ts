import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];

  constructor(private _heroeService: HeroesService) {

    this._heroeService.getHeroes().subscribe((data:any) => {
        console.log(data);
        //Aca ya tengo los objetos separados.
        for(let key$ in data){
          this.heroes.push(data[key$]);
        }
    });
   }

  ngOnInit() {
  }

}
