import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable()
export class CategoryService {

  constructor(private apiService: ApiService) {}

  getCategories() {
    return this.apiService.get('categories/')
  }

}

