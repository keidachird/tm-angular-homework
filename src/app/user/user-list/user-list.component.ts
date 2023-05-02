import { Component, OnInit } from '@angular/core'
import { User } from '../shared/user'
import { UserService } from '../shared/user.service'
import { map } from 'rxjs'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = []

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUsers()
      .pipe(
        map(users =>
          users.map(user => ({
            id: user.id,
            firstName: user.name.split(' ')[0],
            lastName: user.name.split(' ')[1],
            email: user.email.toLowerCase(),
            phone: user.phone,
            imageUrl: `${this.userService.IMG_API_URL}/${JSON.stringify(user)}`,
          }))
        )
      )
      .subscribe(users => (this.users = users))
  }
}
