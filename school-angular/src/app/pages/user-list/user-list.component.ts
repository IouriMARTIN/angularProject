import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../api/api-user.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  users: any[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((res: any) => this.users = res.users);
  }
}
