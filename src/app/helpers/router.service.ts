import { Injectable } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

@Injectable({ providedIn: "root" })
export class RouterService {
  constructor(private _router: Router) {}
  navigate(url: Array<string>, extras: NavigationExtras = {}) {
    this._router.navigate(url, extras);
  }
}
