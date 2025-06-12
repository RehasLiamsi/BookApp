import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService, Book } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html',
})
export class BookFormComponent implements OnInit {
  book: Book = { id: 0, title: '', author: '', publishedDate: '' };
  isEditMode: boolean = false;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.bookService.getBookById(+id).subscribe(b => this.book = b);
    }
  }

  save(): void {
    if (this.isEditMode) {
      this.bookService.updateBook(this.book).subscribe(() => this.router.navigate(['/books']));
    } else {
      this.bookService.addBook(this.book).subscribe(() => this.router.navigate(['/books']));
    }
  }

  cancel(): void {
    this.router.navigate(['/books']);
  }
}

