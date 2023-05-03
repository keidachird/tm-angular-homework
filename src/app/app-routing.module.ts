import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PartTwoComponent } from './pages/part-two/part-two.component'
import { PartOneComponent } from './pages/part-one/part-one.component'

const routes: Routes = [
  { path: '', component: PartOneComponent },
  { path: 'part-two', component: PartTwoComponent },
  { path: '**', redirectTo: '' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
