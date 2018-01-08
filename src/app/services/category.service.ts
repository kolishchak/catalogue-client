import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Category } from '../interfaces/category';

@Injectable()
export class CategoryService {
  private categoryUrl = 'http://localhost:3000/categories';

  constructor(private http: Http) {}

  getCategories():Observable<Category[]> {
    return this.http.get(this.categoryUrl)
                    .map((response: Response) => <Category[]>response.json())
                    .do(data => console.log('Categories data:', data))
                    .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error)
  }

}

