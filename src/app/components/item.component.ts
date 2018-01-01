import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Item } from '../interfaces/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'item',
  templateUrl: '../templates/item.component.html',
  styleUrls: ['../styles/item.component.scss']
})

export class ItemComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems()
  }

  getItems() {
    this.itemService.getItems()
    .subscribe(items => this.items = items);
  }
}
