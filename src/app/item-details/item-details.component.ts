import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Location } from "@angular/common";

import { Item } from '../shared/interfaces/item';
import { ItemService } from '../shared/services/item.service';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})

export class ItemDetailsComponent implements OnInit, OnDestroy {
  @Input() item: Item
  private sub: any;

  constructor(private itemService: ItemService,
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
      this.sub = this.activatedRoute.params.subscribe(params => {
      let slug = params['slug'];
      this.itemService.getItem(slug)
                      .subscribe(response => {this.item = response});
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    this.location.back();
  }
}
