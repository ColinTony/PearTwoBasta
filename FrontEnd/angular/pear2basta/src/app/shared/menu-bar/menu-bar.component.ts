import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

// PrimeNG
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html'
})
export class MenuBarComponent implements OnInit {
  // variables
  public cookieExist: boolean = this.coockieService.check('idUser');
  public menuItems:MenuItem[];

  // usaremos Cookie-Service como metodo rapido de validacion
  // de inicio de sesion. Este proyecto debe quedar rapido
  // la idea es que funicone con Express Session 
  // por ahora las sesiones las manejo como cookies
  constructor(
    private coockieService:CookieService,
    private router:Router
    ) 
  {    
    this.menuItems = [];
  }
  
  ngOnInit(): void 
  {
    if(!this.cookieExist)
    {
      // tiene sesion iniciada
      this.menuItems = 
      [
        {
          label:'Entrar y Jugar',
          icon:"pi pi-desktop",
          items:
          [
            {
              label:'Iniciar Sesion',
              icon:'pi pi-sign-in',
              routerLink:'/login'
            },
            {
              label:'Registrase',
              icon:'pi pi-pencil',
              routerLink:'/registro'
            }
          ]
        }
      ];
    }
    else
    {
      this.menuItems = 
      [
        {
          label:"Perfil",
          icon:"pi pi-user",
          items:[
            {
              label:"Editar info",
              icon:"pi pi-user-edit",
              routerLink:"/dashboard/edit"
            },
            {
              label:"Cerrar Sesion",
              icon:"pi pi-sign-out",
              command:((click:Event) => this.cerrar())
            }
          ]
        },{
          label:"Jugar",
          icon:"pi pi-desktop",
          items:[
            {
              label:"Unirse a Sala",
              icon:"pi pi-users",
              routerLink:"/game/unirse"
            },
            {
              label:"Crear Sala",
              icon:"pi pi-plus",
              routerLink:"/game/crear"
            }
          ]
        }
      ];
    }
  }
  cerrar()
  {
    this.coockieService.deleteAll();
    this.router.navigate(['/login']);
  }
}
