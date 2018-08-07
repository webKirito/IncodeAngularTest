import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import {MatInputModule} from '@angular/material';


import { AppComponent } from './app.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientItemComponent } from './client-item/client-item.component';
import { SearchClientInputComponent } from './search-client-input/search-client-input.component';
import { ClientInfoComponent } from './client-info/client-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ClientItemComponent,
    SearchClientInputComponent,
    ClientInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
