import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArticlesModule } from './articles/articles.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { RegistrationComponent } from './account/registration/registration.component';
import { LoginComponent } from './account/login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PagenotfoundComponent,
    RegistrationComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    StaticpagesModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
