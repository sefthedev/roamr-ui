import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  @Input() signup: boolean = false;

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.fragment?.startsWith('signup')) {
      this.signup = true;
    }
  }
}
