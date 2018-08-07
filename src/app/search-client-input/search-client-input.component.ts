import { Component, OnInit ,NgModule, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search-client-input',
  templateUrl: './search-client-input.component.html',
  styleUrls: ['./search-client-input.component.css']
})

export class SearchClientInputComponent implements OnInit {

  public clientName: string = '';
  
  @Output() searchClient = new EventEmitter<string>()
  
  onSearch() {
    this.searchClient.emit(this.clientName);
  }
  
  constructor() { 

  }

  ngOnInit() {
  }

}
