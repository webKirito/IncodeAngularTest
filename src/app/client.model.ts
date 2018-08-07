export class Client {
    constructor(
        public name : string,
        public photoUrl : string,
        public id : string
    ) {}
}

export interface Clients {
    clients: Client[];
}