import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card/';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultModule } from './layouts/default/default.module';
import { BlogComponent } from './modules/blog/blog.component';
import { ButtonComponent } from './modules/blog/button/button.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ESideComponent } from './e-side/e-side.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { NgxGlideModule } from 'ngx-glide';
import { NotFoundComponent } from "./not-found/not-found.component";
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsPopupModule } from 'ngx-sharebuttons/popup';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    ButtonComponent,
    PreloaderComponent,
    NotFoundComponent,
    NotFoundComponent,
    ESideComponent
  ],
  imports:
    [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatFormFieldModule,
      FlexLayoutModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      FormsModule,
      ReactiveFormsModule,
      MatRadioModule,
      MatDialogModule,
      HttpClientModule,
      DefaultModule,
      MatListModule,
      MatDividerModule,
      MatOptionModule,
      MatSelectModule,
      MatIconModule,
      MatToolbarModule,
      RouterModule,
      FlexLayoutModule,
      MatStepperModule,
      NgxGlideModule,
      ShareButtonsPopupModule,
      ShareButtonsModule,
      ShareIconsModule
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:
    [

    ],
  bootstrap: [AppComponent],
})

export class AppModule { }
