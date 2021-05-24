import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../../../interface/usuario.interface';
import { ConectionDBService } from '../../../services/conection-db.service';
import { CookieService } from 'ngx-cookie-service';
import { UtilCookiesService } from '../../../services/util-cookies.service';

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
    private utilCookie:UtilCookiesService
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

  }

  eliminar()
  {

  }

}
