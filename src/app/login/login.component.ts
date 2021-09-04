import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { filter, tap, merge } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
  email: '',
  password: '',
};
  // formGroup = this.fb.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required, Validators.minLength(4)]]
  // });

  error: boolean;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // console.log(this.formGroup);
  }
  login() {
    // const user = {
    //   email: this.formGroup.get('email').value,
    //   password: this.formGroup.get('password').value
    // };
    // this.loginService.login(user)
    //   .pipe(
    //     filter(result => !!result.user)
    //   ).subscribe({
    //     next: () => {
    //       this.router.navigate(['/posts']);
    //       this.error = false;
    //     },
    //     error: () => {
    //       this.error = true;
    //     }
    //   });
    this.loginService.login(this.user)
      .pipe(
        filter(result => !!result.user)
      ).subscribe({
        next: (result) => {
          localStorage.setItem('token', result.user.token);
          this.router.navigate(['/posts']);
          this.error = false;
        },
        error: () => {
          this.error = true;
        }
      });
  }
}
