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

  heroes: any[] = [];
  loading: boolean = true;

  constructor(private _heroeService: HeroesService) {

    this._heroeService.getHeroes().subscribe((data: any) => {

      //Fines ilustrativos.
      setTimeout(()=> {
          this.loading = false;
          this.heroes = data;
      }, 3000);

    });
  }

  ngOnInit() {
  }


  borrarHeroe(key$: string, k: number) {

    console.log(key$);
    //Cuando borra retorna null.
    this._heroeService.borrarHeroe(key$).subscribe((verificacion: any) => {
        if ( verificacion ){
          console.log(verificacion);
        }
        else{
          // Eliminar del objeto en JavaScript
          delete this.heroes[key$];
        }

    });


  }

}
