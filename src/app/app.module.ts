import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { UserModule } from './user/user.module'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { PartOneComponent } from './pages/part-one/part-one.component'
import { PartTwoComponent } from './pages/part-two/part-two.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PartOneComponent,
    PartTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
