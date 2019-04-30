import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'key',
  pure: false // Pendiente del ciclo de cambios que haga Angular
})
export class KeyPipe implements PipeTransform {

  transform(value: any): any {
    //value = object que tiene toda las llaves.
    let keys = [];

    for (let key in value) {

      keys.push(key);
    }

    return keys;
  }

}
