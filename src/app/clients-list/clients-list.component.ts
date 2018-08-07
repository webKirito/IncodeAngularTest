import { Component, OnInit } from '@angular/core';
import {Client} from '../client.model';
import { log } from 'util';
@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  public clients: Client[] = [
    new Client('dad','dad','1'),
    new Client('dad','dad','2'),
    new Client('dad','dad','3')
  ]

  public initialClientsState: Client[] = [...this.clients];

  constructor() { }

  ngOnInit() {

  }

  onSearch(str : string) {
    console.log(str.length);
    
    if (str.trim()) {
      this.clients = [...this.initialClientsState].filter(client => client.name.startsWith(str));
    } else if(!str) {
      this.clients = this.initialClientsState;
    }
  }

}
