import { Fattura } from "../classes/fattura";

export interface Fatture {
        content: Fattura[],
        pageable: {
            sort: {
                unsorted: boolean,
                sorted: boolean,
                empty: boolean
            },
            offset: number,
            pageNumber: number,
            pageSize: number,
            paged: boolean,
            unpaged: boolean
        },
        last: boolean,
        totalPages: number,
        totalElements: number,
        number: number,
        numberOfElements: number,
        size: number,
        sort: {
            unsorted: boolean,
            sorted: boolean,
            empty: boolean
        },
        first: boolean,
        empty: boolean   
}
