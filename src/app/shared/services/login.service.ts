import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './api/services';
import { ApiAuthPost$Json$Params } from './api/fn/auth/api-auth-post-json';
import { ApiResponseDto, AuthenticateDto } from './api/models';

const defaultPath = '/';  

export interface IUser {
  userId: number
  username: string
  fisrtName: string
  lastName: string
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _lastAuthenticatedPath: string = defaultPath;
  private _user!: IUser;
  isLogged = false;

  constructor(private router: Router, private authSrv: AuthService) { }

  set lastAuthenticatedPath(value: string) {
    this._lastAuthenticatedPath = value;
  }

  get getUser(){
    return this._user;
  }

  get loggedIn(): boolean {
    return this.isLogged;
  }

  async logOut() {
    this.isLogged = false;
    this.router.navigate(['/login']);
  }

  async logIn(auth:AuthenticateDto){

    const params:ApiAuthPost$Json$Params = {
      body: auth
    }

    this.authSrv.apiAuthPost$Json(params).subscribe(
      {
        next: (resp) =>{
          if(resp.error){
            this.isLogged = false; 
          }
          this._user = resp.data.user as IUser;
          this.isLogged = true;
          this.router.navigate([this._lastAuthenticatedPath]);
        },
        error: (e)=>{
          console.log(e);
          this.isLogged = false; 
        }
      }
    )

    return this.isLogged;
  }

}
