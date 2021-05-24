import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilCookiesService {

  constructor(private cookie:CookieService,private router:Router) { }

  redirectIsCookie()
  {
    if(this.cookie.check('idUser'))
      this.router.navigate(['/dashboard']);
  }

  redirectIsNotCookie()
  {
    if(!this.cookie.check('idUser'))
      this.router.navigate(['/login']);
  }
}
