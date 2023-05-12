import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen:boolean = false;
  searchTerm: string = '';
  
  constructor() { }

  ngOnInit(): void { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  searchForCity(){
    console.log(this.searchTerm);
  }

}
