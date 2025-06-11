import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  standalone: true,
  providers: [BookService],
  imports: [CommonModule, FormsModule],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = { id: 0, title: '', author: '', publishedDate: '' };
  isEditMode: boolean = false;

  constructor(private bookService: BookService) { }

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

  editBook(book: Book): void {
    this.newBook = { ...book };
    this.isEditMode = true;
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
