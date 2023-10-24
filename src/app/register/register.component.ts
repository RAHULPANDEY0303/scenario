import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  angForm!: FormGroup;
  constructor(private fb: FormBuilder) {
   this.createForm();
 }
  createForm() {
   this.angForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      resAdd: ['', Validators.required ],
      offAdd: ['', Validators.required ],
      phone: ['', Validators.required ],
      

   });
 }
}
