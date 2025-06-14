import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent {
  constructor(private router: Router) { }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  get toggleLabel(): string {
    return this.router.url === '/quotes' ? 'View Books' : 'View Quotes';
  }

  get toggleLink(): string {
    return this.router.url === '/quotes' ? '/books' : '/quotes';
  }
}
