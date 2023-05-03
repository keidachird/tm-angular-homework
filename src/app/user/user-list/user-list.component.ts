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
  selectedUserIds: number[] = []

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

    this.userService.selectUser.subscribe(userId => {
      const index = this.selectedUserIds.indexOf(userId)
      index === -1
        ? this.selectedUserIds.push(userId)
        : this.selectedUserIds.splice(index, 1)

      this.selectedUserIds.length === this.users.length
        ? this.userService.allSelected.emit(true)
        : this.userService.allSelected.emit(false)
    })

    this.userService.selectAllUsers.subscribe(isAllSelected => {
      isAllSelected
        ? (this.selectedUserIds = this.users.map(user => user.id))
        : (this.selectedUserIds = [])
    })

    this.userService.deleteSelected.subscribe(() => {
      this.users = this.users.filter(
        user => !this.selectedUserIds.includes(user.id)
      )
      this.selectedUserIds.forEach(id =>
        this.userService.deleteUser(id).subscribe()
      )
      this.selectedUserIds = []
    })
  }
}
