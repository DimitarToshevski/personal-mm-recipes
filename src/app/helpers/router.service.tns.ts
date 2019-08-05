import { Injectable } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ExtendedNavigationExtras } from "nativescript-angular/router/router-extensions";

@Injectable({ providedIn: "root" })
export class RouterService {
  constructor(private _router: RouterExtensions) {}

  navigate(url: Array<string>, extras: ExtendedNavigationExtras = {}) {
    this._router.navigate(url, {
      ...extras,
      transition: { name: "slideLeft" }
    });
  }
}
