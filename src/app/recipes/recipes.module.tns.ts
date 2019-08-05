import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { MyRecipesComponent } from "./my-recipes/my-recipes.component";
import { RecipesTabsComponent } from "./recipes-tabs/recipes-tabs.component";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ActionBarModule } from "../action-bar/action-bar.module.tns";
import { ReactiveFormsModule } from "@angular/forms";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
  declarations: [RecipesTabsComponent, MyRecipesComponent, AddRecipeComponent],
  imports: [
    RecipesRoutingModule,
    NativeScriptCommonModule,
    ActionBarModule,
    ReactiveFormsModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RecipesModule {}
