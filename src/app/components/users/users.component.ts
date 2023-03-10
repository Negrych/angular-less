import {Component, OnInit} from '@angular/core';

import {UserService} from "../../services/user.service";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: Array<IUser> | undefined;

  constructor(private userService: UserService) {
  }




  ngOnInit():void {
   this.userService.getUsers().subscribe(response=>this.users=response)
  }
}


