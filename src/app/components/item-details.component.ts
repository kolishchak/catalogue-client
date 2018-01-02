import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Location } from "@angular/common";

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
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
      this.sub = this.activatedRoute.params.subscribe(params => {
      let slug = params['slug'];
      this.itemService.getItem(slug)
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    this.location.back();
  } 
}
