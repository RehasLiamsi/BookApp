import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService, Book } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {
  book: Book = { id: 0, title: '', author: '', publishedDate: '' };
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.bookService.getBook(+id).subscribe(book => this.book = book);
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

