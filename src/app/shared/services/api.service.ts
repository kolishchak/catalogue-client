import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';
import { ErrorService } from './error.service';

@Injectable()
export class ApiService {

  constructor(private http: Http,
              private errorService: ErrorService) {}


   get(path: string, params?: Object): Observable<any> {
        const searchParams = new URLSearchParams();
        for (let param in params) searchParams.set(param, params[param]);

        return this.http.get(environment.API_URL + path, { search: searchParams })
                        .map((response: Response) => response.json())
                        .catch(this.errorService.handleError);
        }

}
