import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.http.post('http://localhost:5222/api/auth/register', this.registerForm.value, { responseType: 'text' })
      .subscribe({
        next: (res) => {
          console.log('Response:', res); // Optional debug
          alert('Registered successfully');
          this.router.navigate(['']);
        },
        error: (err) => {
          console.error('Error:', err);
          alert('Registration failed');
        }
      });
  }
}
