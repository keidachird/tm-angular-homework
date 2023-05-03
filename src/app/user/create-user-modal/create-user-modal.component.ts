import { Component, OnInit } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { UserService } from '../shared/user.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { User } from '../shared/user'

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.scss'],
})
export class CreateUserModalComponent implements OnInit {
  createUserForm!: FormGroup

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<CreateUserModalComponent>
  ) {}

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
      ]),
    })
  }

  get firstName() {
    return this.createUserForm.get('firstName')
  }

  get lastName() {
    return this.createUserForm.get('lastName')
  }

  get email() {
    return this.createUserForm.get('email')
  }

  get phone() {
    return this.createUserForm.get('phone')
  }

  onSubmit() {
    const newUser: Partial<User> = this.createUserForm.value
    this.userService.create.emit(newUser)
    this.dialogRef.close()
  }
}
