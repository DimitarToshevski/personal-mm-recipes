import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
  selector: "app-recipes-tabs",
  templateUrl: "./recipes-tabs.component.html",
  moduleId: module.id
})
export class RecipesTabsComponent implements OnInit {
  constructor(
    private _router: RouterExtensions,
    private _route: ActivatedRoute,
    private _page: Page
  ) {}

  ngOnInit() {
    this._router.navigate(
      [
        {
          outlets: {
            myRecipesOutlet: ["my-recipes"],
            addRecipeOutlet: ["add-recipe"]
          }
        }
      ],
      { relativeTo: this._route }
    );
    this._page.actionBarHidden = true;
  }
}
