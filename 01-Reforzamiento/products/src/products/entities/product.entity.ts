interface UpdateWithOptions {
    name?: string;
    description?: string;
    price?: number;
}


export class Product {
    // public id: string;
    // public name: string;
    // public description?: string;
    // public price: number;

    
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public description?: string,
    ){}

    // Todo updateWith
    updateWith({ name, description, price }: UpdateWithOptions) {
        this.name = name ?? this.name;
        this.price = price ?? this.price;
        this.description = description ?? this.description;

    }
}
