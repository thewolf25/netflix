import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  error:string='';
  constructor(private authService:AuthenticationService, private route:Router) { }

  ngOnInit(): void {
  }

  validate(f){
      if(this.authService.Authenticate(f.value.username , f.value.password)){
          this.route.navigate(['/'])
      }
      else{
        f.reset();
        this.error = "User not matched !!!"
      }
      
  }
}
