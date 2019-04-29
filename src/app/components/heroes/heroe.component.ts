import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface'
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel"

  }

  nuevo: boolean = false;
  id: string;

  constructor(private _heroeService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {

      this.id = params['id'];
    });



  }

  ngOnInit() {
  }


  guardar() {
    
    
    if (this.id == "nuevo") {

      console.log("entre aca")
      this._heroeService.nuevoHeroe(this.heroe).subscribe((data: any) => {
        this.router.navigate(['/heroe', data.name])
      },
        error => {
          console.log(error);
        }
      );
    }
    else {
      this._heroeService.actualizarHeroe(this.heroe, this.id).subscribe((data: any) => {
        console.log(data);
      },
        error => {
          console.log(error);
        }
      )

    }
  }

}
