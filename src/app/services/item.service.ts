import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Item } from '../interfaces/item';

@Injectable()
export class ItemService {
  private itemUrl = 'http://localhost:3000/items';

  constructor(private http: Http) {}

  getItems():Observable<Item[]> {
    return this.http.get(this.itemUrl)
      .map((response: Response) => <Item[]>response.json())
      .do(data => console.log('server data:', data))
      .catch(this.handleError);
  }

  public handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

