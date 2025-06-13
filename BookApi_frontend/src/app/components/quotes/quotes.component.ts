import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes.component.html'
})

export class QuotesComponent {
  favoriteQuotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Simplicity is the ultimate sophistication. – Leonardo da Vinci",
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "In the middle of difficulty lies opportunity. – Albert Einstein",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky"
  ];

  constructor(private router: Router) { }

  goToBooks() {
    this.router.navigate(['/books']);
  }
}
