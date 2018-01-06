import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'category',
  templateUrl: '../templates/category.component.html',
  styleUrls: ['../styles/category.component.scss']
})

export class CategoryComponent implements OnInit, OnDestroy {
  categories: Observable<Category[]>;
  sub: any;
  selectedCategory: string;
 

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) { 
    this.categories = this.categoryService.getCategories();
  }
  
  getCategories() {
    this.categories = this.categoryService.getCategories()
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.selectedCategory = params['slug'];
    });
    this.getCategories()
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelect(selectedCategory: string) {
    this.selectedCategory = selectedCategory;
  }

}
