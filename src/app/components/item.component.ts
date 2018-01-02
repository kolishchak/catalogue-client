import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Item } from '../interfaces/item';
import { ItemService } from '../services/item.service';


@Component({
  selector: 'item',
  templateUrl: '../templates/item.component.html',
  styleUrls: ['../styles/item.component.scss'],
})

export class ItemComponent implements OnInit {
  @Input() slug: string;

  items: Observable<Item[]>;
  p: number = 1;

  constructor(private itemService: ItemService) { 
  }

  ngOnInit() {
    this.items = this.itemService.getItems(this.slug, this.p.toString())
  }

  getPage(page: number) {
    this.p = page;
    this.itemService.getItems(this.slug, page.toString());
  }
}
