import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msg: String = ''
  form: FormGroup

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      senha: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]))
    })
  }

  login(params) {
    this.authService.logIn()
  }

}
