import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddEditBookComponent } from './components/add-edit-book/add-edit-book.component';
import { BookFormComponent } from './components/book-form/book-form.component';

export const routes: Routes = [
  {path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)},
  {path: 'register', loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent)},
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'books/new', component: BookFormComponent },
  { path: 'books/:id/edit', component: AddEditBookComponent }
];
