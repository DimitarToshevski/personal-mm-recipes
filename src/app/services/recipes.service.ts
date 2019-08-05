import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({ providedIn: "root" })
export class RecipesService {
  private recipes = [];

  getAllRecipes() {
    return of(this.recipes);
  }

  addRecipe(recipe: { title: string; description: string }) {
    this.recipes.push(recipe);
    return of(this.recipes);
  }
}
