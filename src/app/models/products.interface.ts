export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    thumbnail: string;
    title: string;
}

export interface Productapiresponse {
    products : Product[];
    limit : number;
    total: number;
    
}
    