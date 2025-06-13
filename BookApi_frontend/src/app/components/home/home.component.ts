import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
