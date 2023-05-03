import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { User } from '../../shared/user'
import { UserService } from '../../shared/user.service'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: User
  @Input() isSelected!: boolean

  constructor(private userService: UserService) {}

  onSelectToogle(): void {
    this.userService.selectUser.emit(this.user.id)
  }
}
