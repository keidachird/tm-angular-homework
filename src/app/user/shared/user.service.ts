import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { UserDto } from './user'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly USER_API_URL = 'https://jsonplaceholder.typicode.com/users'
  readonly IMG_API_URL = 'https://robohash.org/'

  constructor(private http: HttpClient) {}

  getUsers = (): Observable<UserDto[]> => {
    return this.http.get<UserDto[]>(this.USER_API_URL)
  }
}
