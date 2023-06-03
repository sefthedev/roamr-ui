import { Component, } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  
  rememberSignIn : boolean = false;
  showPassword : boolean = false; 

  hidePassword() {
    this.showPassword = !this.showPassword
  }

  rememberChecked(){
    this.rememberSignIn = !this.rememberSignIn;
  }

  

}
