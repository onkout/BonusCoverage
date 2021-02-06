import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private headerComponent: HeaderComponent, private route: ActivatedRoute,
    private router: Router) { }
  
  model = new LoginModel('', '');

  ngOnInit(): void {
    
  }

  public onSubmit(event: Event) {
    this.headerComponent.LoginSuccess(true);
    $(".login-model .close").click()        
    event.preventDefault();    
  }
}
