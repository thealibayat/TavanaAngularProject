import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavBarComponent } from './home-module/components/nav-bar/nav-bar.component';
import { FooterComponent } from './home-module/components/footer/footer.component';
import { BodyComponent } from './home-module/components/body/body.component';
import { HeaderComponent } from './home-module/components/header/header.component';
import { SignInComponent } from './auth-module/components/sign-in/sign-in.component';
import {DropdownDirective} from './shared-main/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BodyComponent,
    HeaderComponent,
    SignInComponent,
    DropdownDirective

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
