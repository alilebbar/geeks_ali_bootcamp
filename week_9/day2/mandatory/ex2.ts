class Product {
    readonly id: number;
    name: string;
    price: number;
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getProductInfo = (): string => {
        return `Le produit ${this.name} a un prix de ${this.price} euros.`;
    }
}

const product1 = new Product(1, "iPhone", 1000);
console.log(product1.getProductInfo());
