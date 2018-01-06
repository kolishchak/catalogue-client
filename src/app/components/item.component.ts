import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Item } from '../interfaces/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'item',
  templateUrl: '../templates/item.component.html',
  styleUrls: ['../styles/item.component.scss'],
})

export class ItemComponent implements OnInit, OnChanges {
  @Input() slug: string;

  items: Observable<Item[]>;
  p: number = 1;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems(this.slug, this.p.toString())
  }

  ngOnChanges(changes: { [property_name: string]: SimpleChange }) {
    for (let propName in changes) {
      let chng = changes[propName];
      this.items = this.itemService.getItems(chng.currentValue, this.p.toString())
    }
  }

  getPage(page: number) {
    this.p = page;
    this.itemService.getItems(this.slug, page.toString());
  }
}
