import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { LatestArticlesComponent } from './articles/latest-articles/latest-articles.component';

const routes: Routes = [
 {path:'', redirectTo:'', pathMatch:'full'},
 {path:"login",component:LoginComponent},
 {path:"register",component:RegistrationComponent},
 {path:"latest-articles",component:LatestArticlesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
