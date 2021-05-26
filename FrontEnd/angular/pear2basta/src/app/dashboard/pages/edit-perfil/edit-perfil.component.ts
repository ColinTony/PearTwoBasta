import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../../../interface/usuario.interface';
import { ConectionDBService } from '../../../services/conection-db.service';
import { CookieService } from 'ngx-cookie-service';
import { UtilCookiesService } from '../../../services/util-cookies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html'
})
export class EditPerfilComponent implements OnInit {
  // views
  @ViewChild('inputNombre') inputNombre!:ElementRef;
  @ViewChild('inputApeP') inputApeP!:ElementRef;
  @ViewChild('inputApeM') inputApeM!:ElementRef;
  @ViewChild('inputEmail') inputEmail!:ElementRef;
  @ViewChild('inputNickName') inputNickName!:ElementRef;
  @ViewChild('inputPass') inputPass!:ElementRef;
  // usuario 
  public usuario : Usuario = {
    nombre:'',
    apeP:'',
    apeM:'',
    email:'',
    nickName:'',
    empatadas:0,
    perdidas:0,
    ganadas:0,
    pass:''
  };

  constructor(
    private dbService:ConectionDBService,
    private coockieService:CookieService,
    private utilCookie:UtilCookiesService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.utilCookie.redirectIsNotCookie();
    this.dbService.getInfo(this.coockieService.get('idUser'))
    .subscribe(user => {
      this.usuario = user;
    },(error)=>{
      console.error('Hubo un error al obtener usuario:'+error);
    });
  }
  updateUsuario()
  {
    
    this.usuario.nombre = this.inputNombre.nativeElement.value;
    this.usuario.apeP = this.inputApeP.nativeElement.value;
    this.usuario.apeM = this.inputApeM.nativeElement.value;
    this.usuario.nickName = this.inputNickName.nativeElement.value;
    this.usuario.email = this.inputEmail.nativeElement.value;

    if(this.inputPass.nativeElement.value != " " ||
       this.inputPass.nativeElement.value != '')
    {
      this.usuario.pass = this.inputPass.nativeElement.value;
    }

    if(!this.dbService.updateUser(this.usuario))
    {
      this.router.navigate(['/dashboard']);
    }
    
  }
  regresar()
  {
    this.router.navigate(['/dashboard']);
  }
  eliminar()
  {
    this.dbService.daleteUser(this.coockieService.get('idUser'));
    this.coockieService.deleteAll();
    this.router.navigate(['/login']);
  }

}
