import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanLoad {

  constructor(private router: Router, private auth: AuthService) {}

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    if (this.auth.isAuthed()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }

}
