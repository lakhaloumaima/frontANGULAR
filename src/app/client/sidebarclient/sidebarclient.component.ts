import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sidebarclient',
  templateUrl: './sidebarclient.component.html',
  styleUrls: ['./sidebarclient.component.css']
})
export class SidebarclientComponent implements OnInit {

  constructor(public usersService:UsersService, public router:Router) { }

  ngOnInit(): void {
  
  }
  logout(){
  
    this.usersService.logout();
    this.router.navigate(['/login']);
   
  }

}
