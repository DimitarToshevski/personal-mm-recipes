import { Component, OnInit } from "@angular/core";
import { RecipesService } from "~/app/services/recipes.service";

@Component({
  selector: "app-my-recipes",
  templateUrl: "./my-recipes.component.html"
})
export class MyRecipesComponent implements OnInit {
  recipes = [];
  constructor(private _recipesService: RecipesService) {}

  ngOnInit() {
    console.log("init");
    this._recipesService
      .getAllRecipes()
      .subscribe(recipes => (this.recipes = recipes));
  }
}
