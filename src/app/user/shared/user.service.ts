import { Injectable, EventEmitter } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User, UserDto } from './user'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly USER_API_URL = 'https://jsonplaceholder.typicode.com/users'
  readonly IMG_API_URL = 'https://robohash.org/'

  selectUser = new EventEmitter<number>()
  selectAllUsers = new EventEmitter<boolean>()
  allSelected = new EventEmitter<boolean>()

  constructor(private http: HttpClient) {}

  getUsers = (): Observable<UserDto[]> => {
    return this.http.get<UserDto[]>(this.USER_API_URL)
  }
}
