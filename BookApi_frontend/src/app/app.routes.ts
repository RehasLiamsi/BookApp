import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddEditBookComponent } from './components/add-edit-book/add-edit-book.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent) },
  { path: 'books', canActivate: [AuthGuard], loadComponent: () => import('./components/book-list/book-list.component').then(m => m.BookListComponent) },
  { path: 'quotes', canActivate: [AuthGuard], loadComponent: () => import('./components/quotes/quotes.component').then(m => m.QuotesComponent) },
  { path: 'books/new', canActivate: [AuthGuard], loadComponent: () => import('./components/book-form/book-form.component').then(m => m.BookFormComponent) },
  { path: 'books/:id/edit', canActivate: [AuthGuard], loadComponent: () => import('./components/add-edit-book/add-edit-book.component').then(m => m.AddEditBookComponent) },
  { path: '**', redirectTo: '' }
];

