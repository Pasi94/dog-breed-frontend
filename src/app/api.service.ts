import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Breed } from "./breed";

import 'rxjs/add/operator/map'
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class APIService {
  constructor(
    private http: HttpClient ) { }

  getList():any{
    return this.http.get("https://dog.ceo/api/breeds/list");
  }

  getImageList(breed_type: string) {
    return this.http.get("https://dog.ceo/api/breed/" + breed_type + "/images");
  }

  getRandomImage():any {
    return this.http.get(`https://dog.ceo/api/breeds/image/random`)
  }
}
