import { Component, OnInit } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';
import { AuthService } from '@core/services/auth.service';
import { UsersService } from '@core/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private usersApi: UsersService, private auth: AuthService) { }

  ngOnInit(): void {

    this.usersApi.getUsers(2, 1).subscribe( result => {
      console.log(result); // { { status message users: []}
    });

    /*this.auth.getMe().subscribe( result => {
      console.log(result); // { status message user: {}}
    });*/
  }

}
