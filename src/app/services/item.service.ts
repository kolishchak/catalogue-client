import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Item } from '../interfaces/item';

@Injectable()
export class ItemService {
  private itemUrl = 'http://localhost:3000/items/';

  constructor(private http: Http) {}

  getItems(slug: string, page: string):Observable<Item[]> {
    let params = new URLSearchParams();
        params.set('category_slug', slug);
        params.set('page', page);
    return this.http.get(this.itemUrl, { search: params })
                    .map((response: Response) => <Item[]>response.json())
                    .do(data => console.log('Items data:', data))
                    .catch(this.handleError);
  }

  getItem(slug: string) {
    return this.http.get(this.itemUrl + slug)
  }

  public handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  
}

