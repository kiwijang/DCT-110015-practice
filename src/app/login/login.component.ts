import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder } from '@angular/forms';
import { filter, tap, merge } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup = this.fb.group({
    email: ['demo@miniasp.com'],
    password: ['123456']
  });

  error: boolean;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    const user = {
      email: this.formGroup.get('email').value,
      password: this.formGroup.get('password').value
    };
    this.loginService.login(user)
      .pipe(
        filter(result => !!result.user)
      ).subscribe({
        next: () => {
          this.router.navigate(['/posts']);
          this.error = false;
        },
        error: () => {
          this.error = true;
        }
      });

  }
}
