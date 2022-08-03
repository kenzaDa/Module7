import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Models/User';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
 
  userPreview$!: Observable<User>;


  constructor(private formBuilder: FormBuilder,
    private AuthService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group({
        username: [null,[Validators.required]],
      password: [null,[Validators.required]],
     
       
    }, {
      updateOn: 'blur'
  });
  
  this.userPreview$ = this.loginForm.valueChanges.pipe(
    map(formValue => ({
        ...formValue,
        roles: ["ROLE_USER"],
        id: 0
    }))
  );

}
onLogin() {
  this.AuthService.login(this.loginForm.value);
  this.router.navigateByUrl('/facesnaps');
}
}
