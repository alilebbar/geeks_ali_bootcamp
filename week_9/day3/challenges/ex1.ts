type User = {
  type: "user";
  name: string;
  age: number;
};

type Product = {
  type: "product";
  id: number;
  price: number;
};

type Order = {
  type: "order";
  orderId: string;
  amount: number;
};

const handleData = (data: (User | Product | Order)[]): string[] => {
  let result: string[] = [];
  data.forEach((d) => {
    if (d.type === "user") {
      result.push(`le client ${d.name} est ${d.age} ans`);
    } else if (d.type === "product") {
      result.push(
        `le produit ${d.id} a ${d.price} euros et coûte ${d.price * 2} euros`
      );
    } else if (d.type === "order") {
      result.push(`l'ordre ${d.orderId} coûte ${d.amount} euros`);
    }
  });
  return result;
};

console.log(handleData([{ type: "user", name: "Alice", age: 25 }, { type: "product", id: 1, price: 10 }]));
console.log(handleData([{ type: "product", id: 1, price: 10 }]));
console.log(handleData([{ type: "order", orderId: "123", amount: 20 }]));