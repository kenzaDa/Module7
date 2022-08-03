import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(log:FormGroup) {
   
    this.http.post('http://127.0.0.1:8000/api/login_check',log)
         .subscribe(
             (response => {
                 // login successful if there's a jwt token in the response
                 if (response) {
                     localStorage.setItem('jwt', JSON.stringify(response));
                 }
             })
         );
 }
}
