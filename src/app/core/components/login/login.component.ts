import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "../../services/login.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  constructor(private loginService: LoginService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initLoginFG();
    // this.loginForm = this.formBuilder.group({
    //   username: [null, [Validators.required]],
    //   password: [null, [Validators.required]]
    // });
  }

  initLoginFG() {
    this.loginForm = this.loginService.initLoginFG();
  }

  handleSubmit(){
    // var formData = this.loginForm.value;
    // var data = {
    //   username: formData.username,
    //   password: formData.password
    // };
  }

}
