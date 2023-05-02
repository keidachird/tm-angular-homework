import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'

import { UserToolbarComponent } from './user-toolbar/user-toolbar.component'
import { UserListComponent } from './user-list/user-list.component'
import { UserCardComponent } from './user-list/user-card/user-card.component'

@NgModule({
  declarations: [UserCardComponent, UserListComponent, UserToolbarComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  exports: [UserCardComponent, UserListComponent, UserToolbarComponent],
})
export class UserModule {}
