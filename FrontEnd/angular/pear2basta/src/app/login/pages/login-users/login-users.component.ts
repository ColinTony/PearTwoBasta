import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../../interface/usuario.interface';
import { ConectionDBService } from '../../../services/conection-db.service';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html'
})
export class LoginUsersComponent implements OnInit {
  // Falta hacer el mensajes de errrores

  @ViewChild('inputEmail') inputEmail!:ElementRef;
  @ViewChild('inputPass') inputPass !: ElementRef;

  public usuario !:Usuario;
  public isOk:boolean = true;
  
  constructor(
    private dbCon : ConectionDBService,
    private cookieService:CookieService,
    private route:Router
    ) { }

  ngOnInit(): void {
  }

  login()
  {
    if(this.checkInputs())
    {
      this.dbCon.login
      (
        this.inputEmail.nativeElement.value,
        this.inputPass.nativeElement.value
      ).
      subscribe(user =>
        {
          this.usuario = user;
          if(this.usuario._id != null)
          {
            this.cookieService
            .set('idUser',this.usuario._id||"");
            
            this.route.navigate(['/dashboard']);
          }else
          {
            console.log('Error en el login');
          }
      },(error=>{
          console.error(error);
          this.isOk = false;
        })
      );

    }

  }

  registroRedirect()
  {
    this.route.navigate(['/registro']);
  }


  checkInputs():boolean
  {
    let isOk = true;
    if(
      this.inputEmail.nativeElement.value == ''  ||
      this.inputEmail.nativeElement.value == " " ||
      this.inputPass.nativeElement.value == ''   ||
      this.inputPass.nativeElement.value == " "
    )
    {
      isOk = false;
      console.log('llenar Campos');
    }
      
    return isOk;
  }
}
