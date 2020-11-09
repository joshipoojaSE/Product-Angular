import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { HomeService } from './home.service';

@Injectable({
    providedIn: 'root'
    })
    export class HomeResolver implements Resolve<any> {
      constructor(private homeService : HomeService) { }

      resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // route.params.id = 1;
        return this.homeService.GetProduct();
      }
    }