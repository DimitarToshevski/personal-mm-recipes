import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
  login(): Observable<boolean> {
    return of(true);
  }

  logout(): Observable<boolean> {
    return of(false);
  }
}
