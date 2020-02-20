import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { AppRoutingModule } from './app-routing.module1';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    SecondcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
