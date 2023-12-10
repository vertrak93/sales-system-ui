import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formBuilder:FormBuilder = inject(FormBuilder);
  authSrv:LoginService = inject(LoginService);

  loginForm = this.initForm();
  disabledLogin = false;
  showPassword = false;
  errorLogin = false;

  initForm(){
    return this.formBuilder.group({
      username:['', [Validators.required,Validators.maxLength(50)]],
      password:['', [Validators.required,Validators.maxLength(50)]]
    });
  } 

  submitForm(){
    if(!this.loginForm.invalid){
      
      this.disabledLogin = true;

      setTimeout(() => {
        
        this.disabledLogin = false;
       
        this.authSrv.logIn(this.loginForm.value).then((res) =>{
          if(!res){
            this.errorLogin = true;
          }
        });

      }, 1000);

    }
    else{
      this.loginForm.markAsTouched();
    }
  }

}

