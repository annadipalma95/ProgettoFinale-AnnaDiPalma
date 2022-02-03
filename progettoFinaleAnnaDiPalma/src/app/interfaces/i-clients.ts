import { Client } from "../classes/client";

export interface IClients {
    content: Array<Client>,
    empty: boolean
    first: boolean
    last: boolean
    number: number,
    numberOfElements: number,
    pageable: object,
    size: number,
    sort: object,
    totalElements: number,
    totalPages: number
}
