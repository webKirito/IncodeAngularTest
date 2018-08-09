import { Component, OnInit, NgModule } from '@angular/core';
import {Client} from '../client.model';
// import {ClientsService} from '../clients.service';


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

  public data : any;

  public initialClientsState: Client[] = [...this.clients];

  constructor() { 

  }

  ngOnInit() {
    fetch('clients.json').then(res => res.json())
      .then(res => console.log(res));
      
  }

  onSearch(str : string) {
    if (str.trim()) {
      this.clients = [...this.initialClientsState].filter(client => client.name.startsWith(str));
    } else if(!str) {
      this.clients = this.initialClientsState;
    }
  }

}
