import { Component } from '@angular/core';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private loginSrv:LoginService){}

  isLogged(){
    return this.loginSrv.isLogged;
  }

  title = 'sales';

}
