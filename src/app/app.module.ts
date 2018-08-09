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
import { FormsModule } from '../../node_modules/@angular/forms';
// import { HttpClientModule } from '../../node_modules/@angular/common/http';

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
    FormsModule,
    // HttpClientModule
  ],
  providers: [
    // HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
