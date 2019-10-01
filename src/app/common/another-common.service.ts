import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnotherCommonService {

  constructor() { }

  sayHello(name?: string) {
    return name + ' Hello!!!';
  }
}
