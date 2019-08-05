import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RecipesService } from "~/app/services/recipes.service";
import { RouterService } from "~/app/helpers/router.service";
import { ActivatedRoute, Router } from "@angular/router";
import { getAddRecipeRoute } from "./add-recipe-route.helper";
import { Subscription } from "rxjs";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "app-add-recipe",
  templateUrl: "./add-recipe.component.html"
})
export class AddRecipeComponent implements OnInit {
  addRecipeForm: FormGroup;
  navigateToUrlOnSubmit = getAddRecipeRoute();
  addRecipesSubs: Subscription;
  showSuccessNotification: boolean;
  constructor(
    private _fb: FormBuilder,
    private _recipesService: RecipesService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.addRecipeForm = this._fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  onSubmit() {
    this._recipesService.addRecipe(this.addRecipeForm.value).subscribe(res => {
      console.log(res, this.navigateToUrlOnSubmit);
      this.addRecipeForm.reset();
      this.showSuccessNotification = true;
      setTimeout(() => {
        this.showSuccessNotification = false;
      }, 1500);
    });
  }
}
