import { Pipe, PipeTransform } from '@angular/core'
import { User } from './user'

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(users: User[], search: string): User[] {
    search = search.trim()
    return users.filter(user => {
      const fullName = `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`
      return fullName.includes(search)
    })
  }
}
