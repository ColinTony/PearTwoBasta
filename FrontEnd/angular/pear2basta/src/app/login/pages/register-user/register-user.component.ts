
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConectionDBService } from '../../../services/conection-db.service';
import { Usuario } from '../../../interface/usuario.interface';
import {Message} from 'primeng//api';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styles: [
  ]
})
export class RegisterUserComponent implements OnInit {
  // Views
  @ViewChild('inputNombre') inputNombre!:ElementRef;
  @ViewChild('inputApeP') inputApeP!:ElementRef;
  @ViewChild('inputApeM') inputApeM!:ElementRef;
  @ViewChild('inputEmail') inputEmail!:ElementRef;
  @ViewChild('inputNickName') inputNickName!:ElementRef;
  @ViewChild('inputPass') inputPass!:ElementRef;

  public isOk:boolean = true;
  public msgs:Message[]=[];

  constructor(
    private dbCrudService:ConectionDBService,
    private route:Router
    ) 
    {

    }

  ngOnInit(): void {
  }

  cancelar():void
  {
    this.route.navigate(['login']);
  }
  
  registrar():void
  {
    if(this.checkInputs())
    {
      console.log(this.inputPass.nativeElement.value);
      let newUsuario:Usuario = 
      {
        nombre:this.inputNombre.nativeElement.value,
        apeP:this.inputApeP.nativeElement.value,
        apeM:this.inputApeM.nativeElement.value,
        nickName:this.inputNickName.nativeElement.value,
        email:this.inputEmail.nativeElement.value,
        pass:this.inputPass.nativeElement.value,
        ganadas:0,
        perdidas:0,
        empatadas:0
      };
      this.dbCrudService.registrar(newUsuario);
      this.route.navigate(['/login']);
    }

  }

  checkInputs():boolean
  {
    
    if(
      this.inputNombre.nativeElement.value == " " || 
      this.inputNombre.nativeElement.value == '' ||
      this.inputApeP.nativeElement.value == " " || 
      this.inputApeP.nativeElement.value == '' ||
      this.inputApeM.nativeElement.value == " " || 
      this.inputApeM.nativeElement.value == '' ||
      this.inputNickName.nativeElement.value == " " || 
      this.inputNickName.nativeElement.value == '' ||
      this.inputEmail.nativeElement.value == " " || 
      this.inputEmail.nativeElement.value == '' ||
      this.inputPass.nativeElement.value == " " || 
      this.inputPass.nativeElement.value == ''
      )
      {
        this.isOk = false;
        this.msgs.push({
          severity:'info',
          summary:'Error',
          detail:'Porfavor llena todos los campos'
        });
      }
    return this.isOk;
  }
}
