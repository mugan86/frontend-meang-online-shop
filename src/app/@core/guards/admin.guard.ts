import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const session = this.auth.getSession();
      if (session !== null) {
        // Comprobar que fecha actual no es mayor que caducidad
        const dateActual = new Date().toISOString();
        const expirateDate = new Date(session.expiresIn).toISOString();
        console.log('Actual', dateActual);
        console.log('Caducidad', expirateDate);
        const expirateFinish = dateActual > expirateDate;
        console.log('Caducado?', expirateFinish);

        // Una vez comprobado la fecha de caducidad, vamos a comprobar el role
        if (session.role === 'ADMIN' && !expirateFinish) {
          return true;
        }
        return false;
      }
      console.log('Sesion no iniciada - Guard');
      return false;
  }
}
