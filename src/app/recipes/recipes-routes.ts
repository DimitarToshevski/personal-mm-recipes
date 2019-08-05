import { Routes } from "@angular/router";
import { MyRecipesComponent } from "./my-recipes/my-recipes.component";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";

export const routes: Routes = [
  {
    path: "",
    component: MyRecipesComponent,
    pathMatch: "full"
  },
  {
    path: "add-recipe",
    component: AddRecipeComponent
  }
];
