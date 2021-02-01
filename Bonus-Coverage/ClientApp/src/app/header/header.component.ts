import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  IsLogin: boolean = false;

  public LoginSuccess(_IsLogin: boolean): void {
    this.IsLogin = _IsLogin;    
    this.router.navigate(['bonus-coverage/profile'], { relativeTo: this.route });
  }

  Logout(): void {
    this.IsLogin = false;
    this.router.navigate(['bonus-coverage'], { relativeTo: this.route });
  }

  ngOnInit(): void {

  }
}
