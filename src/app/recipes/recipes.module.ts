import { NgModule } from "@angular/core";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { MyRecipesComponent } from "./my-recipes/my-recipes.component";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { ActionBarModule } from "../action-bar/action-bar.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    RecipesRoutingModule,
    ActionBarModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [MyRecipesComponent, AddRecipeComponent]
})
export class RecipesModule {}
