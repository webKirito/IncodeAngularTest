import { Injectable } from "../../node_modules/@angular/core";
import { HttpClient, HttpHeaders } from "../../node_modules/@angular/common/http";



@Injectable()
export class ClientsService {

    private url:string = `http://localhost:4200/clients`;

    constructor(private httpClient : HttpClient) {
        
    }

    getClients() {
        return this.httpClient.get(this.url);
    }
}