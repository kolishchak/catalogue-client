import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';

export class ErrorService {

  constructor() {}

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}