import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginPersistService } from '../service/persist/login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private router: Router, private loginPersistService: LoginPersistService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.loginPersistService.getUserLoggedIn() === 'ée') {
        console.log('No estás logueado');
        this.router.navigate(['/login']);
        return false;
      }
    return true;
  }
}
