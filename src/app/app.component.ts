import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLogged = false

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.isLogged.subscribe(
      (data) => { this.isLogged = data.isLogged },
      (err) => { console.log(`ERROR: ${err}`) })
  }
}
