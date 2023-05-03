import { Injectable, EventEmitter } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { SortOrder, User, UserDto } from './user'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly USER_API_URL = 'https://jsonplaceholder.typicode.com/users'
  readonly IMG_API_URL = 'https://robohash.org/'

  selectUser = new EventEmitter<number>()
  selectAllUsers = new EventEmitter<boolean>()
  allSelected = new EventEmitter<boolean>()
  deleteSelected = new EventEmitter<void>()
  create = new EventEmitter<Partial<User>>()
  sort = new EventEmitter<SortOrder>()
  search = new EventEmitter<string>()

  constructor(private http: HttpClient) {}

  getUsers = (): Observable<UserDto[]> => {
    return this.http.get<UserDto[]>(this.USER_API_URL)
  }

  deleteUser = (id: number): Observable<UserDto> => {
    return this.http.delete<UserDto>(`${this.USER_API_URL}/${id}`)
  }

  createUser(user: Partial<User>): Observable<Partial<User>> {
    return this.http.post(this.USER_API_URL, user)
  }
}
