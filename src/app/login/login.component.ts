import { Component } from "@angular/core";
import { RouterService } from "../helpers/router.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(
    private _router: RouterService,
    private _authService: AuthService
  ) {}

  onSubmit() {
    this._authService
      .login()
      .subscribe(() => this._router.navigate(["/recipes"]));
  }
}
