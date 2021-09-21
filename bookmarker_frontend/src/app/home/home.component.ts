import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerForm : FormGroup;
  loginForm : FormGroup;
  register : boolean = false;
  login : boolean = false;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name : ['',[Validators.required]],
      username : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
  }

}
