import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isOnQuotesPage(): boolean {
    return this.router.url === '/quotes';
  }

  get toggleLabel(): string {
    return this.isOnQuotesPage() ? 'View Books' : 'View Quotes';
  }

  get toggleLink(): string {
    return this.isOnQuotesPage() ? '/books' : '/quotes';
  }
}
