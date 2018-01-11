import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'category',
  templateUrl: '../templates/category.component.html',
  styleUrls: ['../styles/category.component.scss']
})

export class CategoryComponent implements OnInit {
  categories: Observable<Category[]>;
  sub: any;
  slug: string;
  p: number = 1;
 
  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { 
  }
  
  getCategories() {
    this.categories = this.categoryService.getCategories()
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.slug = params['slug'];
      this.p = Number.parseInt(params['page']);
    });
    this.getCategories()
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelect(selectedCategory: string) {
    this.slug = selectedCategory;
  }

  getPage(page: number) {
    this.router.navigate([this.slug, page])
  }
}
