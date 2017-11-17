import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.prefetchUsers().subscribe(
      users => {
      this.users = users;
      console.log(users);
      },
      err => {
        console.log(err);
      }
    );

  }

  onSelect(hero: User): void { this.selectedHero = hero; }
}
