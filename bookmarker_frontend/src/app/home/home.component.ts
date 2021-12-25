import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService} from '../user.service';
import { User } from '../user';

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
  loggedIn : boolean = false;
  closeResult : string;
  check : string;
  userAdded : boolean = false;
  user : User = new User();

  constructor(
    private fb : FormBuilder,
    private modalService : NgbModal,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name : ['',[Validators.required]],
      email : ['',[Validators.email]],
      password : ['',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/)]]
    })
    this.loginForm = this.fb.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
  }

  openRegister(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        this.saveUser();
      }, (reason) => {
        this.closeResult = `Dismissed`;
      });
    }

  openLogin(loginContent) {
        this.modalService.open(loginContent, {ariaLabelledBy: 'modal-basic-title-login'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
          this.userLogIn();
        }, (reason) => {
          this.closeResult = `Dismissed`;
        });
      }

  saveUser () {
    this.user.email = this.registerForm.get('email').value;
    this.user.name = this.registerForm.get('name').value;
    this.user.password = this.registerForm.get('password').value;
    this.userService.addUser(this.user).subscribe( data=>{
      this.userAdded = true;
      },
      error => console.log(error));
  }

  userLogIn() {

  }

}
