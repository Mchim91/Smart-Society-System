import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { SmartSocietyServiceService } from '../shared/service/smart-society-service.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  constructor(private http:SmartSocietyServiceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const {id}=route.params
return this.http.findOffendersInCrimeOffenders(id,'crimeOffenders')

  }
}
