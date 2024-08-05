import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm = this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  })
  constructor(private fb:FormBuilder, private api:ApiService, private router:Router){}

  register(){
    if(this.registerForm.valid){
      const username =this.registerForm.value.username
      const email =this.registerForm.value.email
      const password =this.registerForm.value.password
      const user = {username,email,password}
      this.api.registerAPI(user).subscribe({
        next:(res:any)=>{
          alert(`${res.username} has successfully registered`)
          this.registerForm.reset()
          //navigate to login
          this.router.navigateByUrl('login')
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
