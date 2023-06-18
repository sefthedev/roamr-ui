import { Component } from '@angular/core';
import { FirebaseAuthService } from '@app/core/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  searchTerm: string = '';
  isLoggedIn: boolean;

  constructor(private firebaseAuthService: FirebaseAuthService) {
    this.isLoggedIn = this.firebaseAuthService.isLoggedIn
  }

  ngOnInit() {

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  searchForCity() {
    console.log(this.searchTerm);
  }

  signOut(){
    this.firebaseAuthService.SignOut()
    window.location.reload();
  }
}
