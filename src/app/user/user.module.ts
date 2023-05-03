import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSelectModule } from '@angular/material/select'

import { UserToolbarComponent } from './user-toolbar/user-toolbar.component'
import { UserListComponent } from './user-list/user-list.component'
import { UserCardComponent } from './user-list/user-card/user-card.component'

@NgModule({
  declarations: [UserCardComponent, UserListComponent, UserToolbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
  ],
  exports: [UserCardComponent, UserListComponent, UserToolbarComponent],
})
export class UserModule {}
