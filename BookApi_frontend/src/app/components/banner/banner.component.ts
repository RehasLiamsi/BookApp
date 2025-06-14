import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banner.component.html',
})
export class BannerComponent implements OnInit {
  isDarkMode = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.setDarkMode(true);
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.setDarkMode(this.isDarkMode);
  }

  private setDarkMode(enabled: boolean): void {
    const body = document.body;
    if (enabled) {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

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
