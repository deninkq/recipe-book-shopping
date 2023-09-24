import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test',
      'Test desc',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg'
    ),
    new Recipe(
        'A test2',
        'Test desc2',
        'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg'
      ),
  ];

  constructor() {}
}
