import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() isLogged = new EventEmitter();

  constructor(private httpService: HttpService) { }

  logIn() {
    this.isLogged.emit({ isLogged: true })
  }

  logOut() {
    this.isLogged.emit({ isLogged: false })
  }

}
