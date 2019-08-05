import { Component, Input } from "@angular/core";
import { RouterService } from "../helpers/router.service";

@Component({
  selector: "app-action-bar",
  templateUrl: "./action-bar.component.html",
  styleUrls: ["./action-bar.component.scss"]
})
export class ActionBarComponent {
  @Input() canLogout = true;
  @Input() title: string;

  constructor(private _router: RouterService) {}

  onLogout() {
    this._router.navigate(["/login"]);
  }
}
