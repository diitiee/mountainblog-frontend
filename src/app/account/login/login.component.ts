import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
  })
  constructor(private fb:FormBuilder,private api:ApiService, private router:Router){}

  login(){
    if(this.loginForm.valid){
      const email =this.loginForm.value.email
      const password =this.loginForm.value.password
      const user = {email,password}
      this.api.loginAPI(user).subscribe({
        next:(res:any)=>{
          alert(`${res.existingUser.username} has logged in`)
          sessionStorage.setItem("existingUser",JSON.stringify(res.existingUser))
          sessionStorage.setItem("token",JSON.stringify(res.token))
          this.loginForm.reset()
          this.router.navigateByUrl("/latest-articles")
        },
        error:(reason:any)=>{
          alert(reason.error)
        }
      })
    }else{
      alert("Invalid Form")
    }
  }

}
