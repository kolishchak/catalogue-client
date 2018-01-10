import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from './../../environments/environment';
import { Category } from '../interfaces/category';

@Injectable()
export class CategoryService {

  constructor(private http: Http) {}

  getCategories():Observable<Category[]> {
    return this.http.get(environment.API_URL + 'categories/')
                    .map((response: Response) => <Category[]>response.json())
                    .do(data => console.log('Categories data:', data))
                    .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error)
  }

}

