import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://images.unsplash.com/photo-1541781622821-8af65b6b449f?ixid=MnwyMjE5MDV8MHwxfGFsbHx8fHx8fHx8fDE2MTgxMjM0OTc&ixlib=rb-1.2.1&fm=jpg&q=85&fit=crop&w=2560&h=1707',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixid=MnwyMjE5MDV8MHwxfGFsbHx8fHx8fHx8fDE2MTgxMjQwNjY&ixlib=rb-1.2.1&fm=jpg&q=85&fit=crop&w=2560&h=1696',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ]

  getAllRecipes() {
    return [...this.recipes]
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id == recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
    console.log(this.recipes)
  }
}
