import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout {

  constructor(private router: Router) {

    localStorage.removeItem('isLoggedIn');

  }

}