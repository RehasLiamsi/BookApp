import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, ThemeToggleComponent],
  templateUrl: './banner.component.html',
})
export class BannerComponent implements OnInit {
  isDarkMode = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isOnQuotesPage(): boolean {
    return this.router.url === '/quotes';
  }

  private setDarkMode(enabled: boolean): void {
    const html = document.documentElement;
    if (enabled) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

}
