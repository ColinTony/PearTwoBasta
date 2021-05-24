import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../interface/usuario.interface';
import { ConectionDBService } from '../../../services/conection-db.service';
import { CookieService } from 'ngx-cookie-service';
import { UtilCookiesService } from '../../../services/util-cookies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

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
  public infoGames !:any;
  private _idUser !: string;
  public totalPartidas:number=0;
  constructor( 
    private dbService:ConectionDBService,
    private cookieService:CookieService,
    private utilCookie:UtilCookiesService,
    private router:Router
    ) 
    { 
      this.utilCookie.redirectIsNotCookie();
    this._idUser = this.cookieService.get('idUser');
      
    }

    unirseSala()
    {
      console.log('modulo no terminado ggg');
    }

    crearSala()
    {
      // redirigamos al modulo crearSala
      console.log('Modulo sin terminar');
    }

    editarInfo(){
      this.router.navigate(['/dashboard/edit']);
    }

  ngOnInit(): void { 
    this.dbService.getInfo(this._idUser)
      .subscribe(user=>{
        this.usuario = user;
        this.totalPartidas = user.ganadas+user.perdidas+user.empatadas;
        this.infoGames = 
        {
          labels: ['Ganadas','Perdidas','Empatadas'],
          datasets: [
              {
                  data: [
                    this.usuario.ganadas, 
                    this.usuario.perdidas, 
                    this.usuario.empatadas],
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]    
          };
        console.log(this.usuario);
      },(error=>{
        // error
        console.error(error);
      })); 
  }

}
