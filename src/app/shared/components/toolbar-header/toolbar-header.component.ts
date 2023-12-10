import { Component } from '@angular/core';
import { AppControlService } from '../../services/app-control.service';
import { LoginService, IUser } from '../../services/login.service';

@Component({
  selector: 'app-toolbar-header',
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.scss']
})
export class ToolbarHeaderComponent {

  username:string = '';

  constructor(private appControlSrv: AppControlService, private loginSrv: LoginService){
    this.username = loginSrv.getUser.username;
  }

  toggleSideNav(){
    this.appControlSrv.toggleSideNavMenu();
  }

  logOut(){
    this.loginSrv.logOut();
  }

}
