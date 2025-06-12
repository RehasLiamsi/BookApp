import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddEditBookComponent } from './components/add-edit-book/add-edit-book.component';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'books/new', component: AddEditBookComponent },
  { path: 'books/:id/edit', component: AddEditBookComponent }
];
