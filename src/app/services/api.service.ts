import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from './../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: Http) {}

   get(path: string, params?: Object): Observable<any> {
        const searchParams = new URLSearchParams();
        for (let param in params) searchParams.set(param, params[param]);
        
        return this.http.get(environment.API_URL + path, { search: searchParams })
                        .map((response: Response) => response.json())
                        .catch(this.handleError);
        }

    handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }
}
