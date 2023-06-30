import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  validEmail:boolean = true;
  see:boolean=true;

  formAuth=this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['', [Validators.required]]
  })

   constructor(private fb:FormBuilder){
  }

  send(){}
}
