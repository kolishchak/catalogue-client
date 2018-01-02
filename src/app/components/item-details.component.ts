import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";

import { Item } from '../interfaces/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'item-details',
  templateUrl: '../templates/item-details.component.html',
  styleUrls: ['../styles/item-details.component.scss']
})

export class ItemDetailsComponent implements OnInit, OnDestroy {
  private sub: any;

  constructor(private itemService: ItemService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.sub = this.activatedRoute.params.subscribe(params => {
      let slug = params['slug'];
      this.itemService.getItem(slug)
          .subscribe(response => this.item = response.json())
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
