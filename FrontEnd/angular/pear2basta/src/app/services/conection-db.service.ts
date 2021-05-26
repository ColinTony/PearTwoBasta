import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from '../interface/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class ConectionDBService {

  private _urlBase = 'http://localhost:5000/api';
  private _httpHeaders:HttpHeaders;
  private contentType:string = "application/json";
  
  constructor(
    private http:HttpClient
    ) 
    {
      this._httpHeaders = new HttpHeaders()
      .set('Content-Type',this.contentType);
    }

  // POSTS
  registrar( newUsuario : Usuario ):void
  {
    let url = `${this._urlBase}/registro`;
    
    this.http.post(url,newUsuario,{headers:this._httpHeaders})
    .subscribe({
      next: data =>{
        console.log(data);
      },
      error: error=>{
        console.log(error+': Error registrarse POST');
      }
    });
  }
  // GETS
  login( email:string,pass:string ):Observable<Usuario>
  {
    const params = new HttpParams()
    .set('email',email)
    .set('pass',pass);

    const url = `${this._urlBase}/login`;

    return this.http.get<Usuario>(url,{params});
  }
  /*
    Obtener la informacion con el ID de mongo
  */
  getInfo(id:string):Observable<Usuario>
  {
    const params = new HttpParams()
    .set('idUser',id);

    const url = `${this._urlBase}/user`;
    return this.http.get<Usuario>(url,{params});

  }
  // PUTS
  updateUser(user:Usuario):boolean
  {
    let isOk:boolean = false;
    let url = `${this._urlBase}/editar`;
    this.http.put(url,user)
    .subscribe({
      next:data=>{
        isOk = true;
      },
      error:error=>{
        console.error('Error al actualizar datos ' + error);
      }
    });

    return isOk;
  }
  // DELETES
  daleteUser(id:string)
  {
    // poner los mensajes de confirmacions
    let url = `${this._urlBase}/eliminar`;
    const params = new HttpParams()
    .set('idUser',id);
    this.http.delete(url,{params}).subscribe(data=>{
      console.log(data);
    },(err)=>
    {
      console.error('Error en eliminar '+ err);
    });
  }

}
