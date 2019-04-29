import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { HttpHeaders } from '@angular/common/http'
import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL: string = "https://heroesapp-181ae.firebaseio.com/heroes.json";
  heroeURL: string = "https://heroesapp-181ae.firebaseio.com/";

  constructor(private http: HttpClient) { }

  nuevoHeroe(heroe: Heroe) {

    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    //Realizamos la conversion del objeto heroe a JSON.
    let body = JSON.stringify(heroe);

    //Aquí realizamos el observable.
    return this.http.post(this.heroesURL, body, headers).pipe(
      map(res => {
        return res;
      })
    )
  }


  actualizarHeroe(heroe: Heroe, id: string) {

    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    //Realizamos la conversion del objeto heroe a JSON.
    let body = JSON.stringify(heroe);
    
    let URL = `${this.heroeURL}/${id}`;

    //Aquí realizamos el observable.
    return this.http.put(URL, body, headers).pipe(
      map(res => {
        return res;
      })
    )
  }
}
