import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
    {path:'about-us',component:AboutUsComponent},
    {path:'contact-us',component:ContactUsComponent}
];

@NgModule({
  imports: [
   RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class StaticpagesRoutingModule { }

