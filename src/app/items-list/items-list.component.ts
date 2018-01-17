import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Item } from '../shared/interfaces/item';
import { ItemService } from '../shared/services/item.service';

@Component({
  selector: 'items-list',
  templateUrl: '../templates/items-list.component.html',
  styleUrls: ['../styles/items-list.component.scss'],
})

export class ItemsListComponent implements OnInit, OnChanges {
  @Input() slug: string;
  @Input() p: number = 1;

  itemsCount: Observable<number[]>
  items: Observable<Item[]>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getCount(this.slug)
                    .subscribe(response => this.itemsCount = response);
    this.items = this.itemService.getItems(this.slug, this.p.toString())
  }

  ngOnChanges(changes: { [property_name: string]: SimpleChange }) {
    for (let propName in changes) {
      let chng = changes[propName];
        if (propName === 'slug' && chng.previousValue !== chng.currentValue) {
          this.itemService.getCount(this.slug)
                          .subscribe(response => this.itemsCount = response);
        }
      this.items = this.itemService.getItems(this.slug, this.p.toString())
    }
  }
}
