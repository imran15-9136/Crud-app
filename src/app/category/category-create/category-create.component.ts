import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  constructor() { }

 
  ngOnInit(): void {
  }
  categoryForm = new FormGroup({
    name: new FormControl(),
    category: new FormControl()
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.categoryForm.value);
  }

}
