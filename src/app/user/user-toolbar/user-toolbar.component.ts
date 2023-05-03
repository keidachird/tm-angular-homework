import { Component, Output, EventEmitter, OnInit } from '@angular/core'
import { UserService } from '../shared/user.service'
import { SortOrder } from '../shared/user'

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.scss'],
})
export class UserToolbarComponent implements OnInit {
  isAllSelected = false
  sortOrder: SortOrder | undefined
  searchText = ''

  constructor(private userService: UserService) {
    this.userService.allSelected.subscribe(isAllSelected => {
      this.isAllSelected = isAllSelected
    })
  }

  ngOnInit(): void {}

  onSelectAll = (): void => {
    this.userService.selectAllUsers.emit(this.isAllSelected)
  }

  onDeleteSelected = (): void => {
    this.userService.deleteSelected.emit()
  }

  onSort = (): void => {
    this.userService.sort.emit(this.sortOrder)
  }

  onSearch = (): void => {
    this.userService.search.emit(this.searchText)
  }
}
