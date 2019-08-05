import { Routes } from "@angular/router";
import { MyRecipesComponent } from "./my-recipes/my-recipes.component";
import { RecipesTabsComponent } from "./recipes-tabs/recipes-tabs.component";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";

export const routes: Routes = [
  {
    path: "tabs",
    component: RecipesTabsComponent,
    children: [
      {
        path: "my-recipes",
        component: MyRecipesComponent,
        outlet: "myRecipesOutlet"
      },
      {
        path: "add-recipe",
        component: AddRecipeComponent,
        outlet: "addRecipeOutlet"
      }
    ]
  },
  {
    path: "my-recipes",
    component: RecipesTabsComponent,
    children: [
      {
        path: "my-recipes",
        component: MyRecipesComponent,
        outlet: "myRecipesOutlet"
      },
      {
        path: "add-recipe",
        component: AddRecipeComponent,
        outlet: "addRecipeOutlet"
      }
    ]
  },
  { path: "", redirectTo: "tabs", pathMatch: "full" }
];
