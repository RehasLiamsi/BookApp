import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }

logout() {
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}

isLoggedIn(): boolean {
  return !!localStorage.getItem('token');
}
}

