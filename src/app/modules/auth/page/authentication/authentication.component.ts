import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { FirebaseAuthService } from '@app/core/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  @Input() signup: boolean = false;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private fireBaseAuthService: FirebaseAuthService
  ) {

  }
  
  ngOnInit(): void {
    if (this.fireBaseAuthService.isLoggedIn) {
      this.router.navigate(['']);
    }
    if (this.activatedRoute.snapshot.fragment?.startsWith('signup')) {
      this.signup = true;
    }
  }
}
