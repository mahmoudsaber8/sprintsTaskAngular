import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Contact } from 'src/app/models/contact.model'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContactsComponent } from './components/my-contacts/my-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    MyContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
