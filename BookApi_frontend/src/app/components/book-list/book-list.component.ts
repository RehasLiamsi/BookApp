import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = { id: 0, title: '', author: '', publishedDate: '' };
  isEditMode: boolean = false;

  constructor(private bookService: BookService, private router: Router) { }

  goToQuotes() {
    this.router.navigate(['/quotes']);
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

  addBook(): void {
    this.bookService.addBook(this.newBook).subscribe(() => {
      this.loadBooks();
      this.resetForm();        ;
    });
  }

  editBook(id: number): void {
    this.router.navigate(['/books', id, 'edit']);
  }

  updateBook(): void {
    this.bookService.updateBook(this.newBook).subscribe(() => {
      this.loadBooks();
      this.resetForm();
    });
  }

  cancelEdit(): void {
    this.resetForm();
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => this.loadBooks());
  }

  resetForm(): void {
    this.newBook = { id: 0, title: '', author: '', publishedDate: '' };
    this.isEditMode = false;
  }
}
