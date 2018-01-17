import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable()
export class ItemService {

  constructor(private apiService: ApiService) {}

  getItems(slug: string, page: string) {
    return this.apiService.get('items/', { category_slug: slug, page: page })
  }

  getItem(slug: string) {
    return this.apiService.get('items/' + slug)
  }

  getCount(slug: string) {
    return this.apiService.get('items/count', { category_slug: slug })
  }

}
