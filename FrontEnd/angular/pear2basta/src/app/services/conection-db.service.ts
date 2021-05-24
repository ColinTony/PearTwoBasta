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

  // DELETES


}
