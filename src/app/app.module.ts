import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

//Routes
import { RouterModule } from '@angular/router';
import { routes as appRoutes } from './routes';

//Services
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';

//Buttons
import { SaveButtonComponent } from './components/buttons/save-button/save-button.component';
import { CancelButtonComponent } from './components/buttons/cancel-button/cancel-button.component';
import { SearchButtonComponent } from './components/buttons/search-button/search-button.component';
import { UploadButtonComponent } from './components/buttons/upload-button/upload-button.component';
import { DeleteButtonComponent } from './components/buttons/delete-button/delete-button.component';
import { EditButtonComponent } from './components/buttons/edit-button/edit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    SaveButtonComponent,
    CancelButtonComponent,
    SearchButtonComponent,
    UploadButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService, 
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
