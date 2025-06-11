import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './app/components/book-list/book-list.component';

bootstrapApplication(BookListComponent, {
  providers: [importProvidersFrom(HttpClientModule)],
});

