
import { Component, OnInit } from '@angular/core';
import { User, MainAuthService } from '../main-auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
user:User = null;
  constructor(private AuthService:MainAuthService) { }

  ngOnInit() {
    this.AuthService.getLoggedInUser().subscribe(result=>{
      this.user=result;
    });

  }

}
