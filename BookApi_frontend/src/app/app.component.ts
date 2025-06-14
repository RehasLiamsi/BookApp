import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterModule, BannerComponent]
})
export class AppComponent {
  title = 'BookApp';

  constructor(private router: Router) { }

  isHomePage(): boolean {
    return this.router.url === '/';
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    location.reload();
  }
}
