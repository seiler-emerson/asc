import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  links: any = new Array();

  constructor(public security: SecurityService, private router: Router) { }

  ngOnInit(): void {

  }

  getLinks(): any {
    this.links = []
    if (!this.security.logged) {
      this.links.push({ title: 'Home', route: 'home-patient' });
      this.links.push({ title: 'Professionals', route: 'login-professional' });
      this.links.push({ title: 'Login', route: 'login-patient' });
      this.links.push({ title: 'Register', route: 'register-patient' });
    } else {
      this.links.push({ title: 'Home', route: 'home-patient' });
      this.links.push({ title: 'Logoff', route: 'login-patient', action: true });
    }
    return this.links
  }

  logout(): void {
    this.security.logged = false
    this.router.navigateByUrl("");
  }

}

