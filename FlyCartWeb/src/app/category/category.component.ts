import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from '../shared/category.model';
import { DataSourceService } from '../shared/data-source.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  category: Category = new Category();
  buttonMode : boolean =true;
  constructor(private dataSource: DataSourceService) {}

  categoryForm = new FormGroup({
    categoryID: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    isActive: new FormControl(''),
    isDelete: new FormControl(''),
  });

  get categoryID() {
    return this.categoryForm.get('categoryID');
  }

  get name() {
    return this.categoryForm.get('name');
  }

  get description() {
    return this.categoryForm.get('description');
  }

  get isActive() {
    return this.categoryForm.get('isActive');
  }

  get isDelete() {
    return this.categoryForm.get('isDelete');
  }
  
  
  onSubmit() {
    this.category = this.categoryForm.value;
    if(this.buttonMode){
      this.insertCategory();
      this.getCategories();
    }
    else{
      this.editCategory();
      this.getCategories();
    }
  }
  getCategories() {
    return this.dataSource
      .getCategories()
      .subscribe((response) => (this.categories = response), err => this.getCategories());
  }

  getCategory(categoryID: number) {
    return this.dataSource
      .getCategory(categoryID)
      .subscribe((response) => (this.category = response));
  }

  populateCategory(category : Category){
    // this.category = new Category();
    
    this.category = Object.assign({}, category);

    this.buttonMode = false;
  }

  insertCategory() {
    this.dataSource
      .createCategory(this.category)
      .subscribe((response) => this.getCategories(), err => this.getCategories());
  }

  editCategory() {
    this.dataSource
      .editCategory(this.category)
      .subscribe((response) => this.getCategories(), err => this.getCategories());
  }

  deleteCategory(categoryID: number) {
    this.dataSource
      .deleteCategory(categoryID)
      .subscribe((response) => this.getCategories(), err => this.getCategories());
  }
  ngOnInit(): void {
    this.getCategories();
  }
}
