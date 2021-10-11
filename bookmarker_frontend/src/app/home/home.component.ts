import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  closeResult : string;
  check : string;

  constructor(
    private fb : FormBuilder,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name : ['',[Validators.required]],
      email : ['',[Validators.email]],
      password : ['',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/)]]
    })
  }

  open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        this.saveUser();
      }, (reason) => {
        this.closeResult = `Dismissed`;
      });
    }

  saveUser () {


  }

}
