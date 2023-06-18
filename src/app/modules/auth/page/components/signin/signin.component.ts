import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseAuthService } from '@app/core/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  rememberSignIn: boolean = false;
  showPassword: boolean = false;
  @Output() signup: EventEmitter<void> = new EventEmitter<void>();

  constructor(private firebaseAuthService: FirebaseAuthService) {}

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  hidePassword() {
    this.showPassword = !this.showPassword;
  }

  rememberChecked() {
    this.rememberSignIn = !this.rememberSignIn;
  }

  onSubmit() {
    const email = this.signinForm.get('email')?.value;
    const password = this.signinForm.get('password')?.value;

    if (email && password) {
      this.firebaseAuthService.SignIn(email, password);
    }
  }
}
