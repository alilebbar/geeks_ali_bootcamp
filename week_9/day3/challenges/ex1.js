var handleData = function (data) {
    var result = [];
    data.forEach(function (d) {
        if (d.type === "user") {
            result.push("le client ".concat(d.name, " est ").concat(d.age, " ans"));
        }
        else if (d.type === "product") {
            result.push("le produit ".concat(d.id, " a ").concat(d.price, " euros et co\u00FBte ").concat(d.price * 2, " euros"));
        }
        else if (d.type === "order") {
            result.push("l'ordre ".concat(d.orderId, " co\u00FBte ").concat(d.amount, " euros"));
        }
    });
    return result;
};
console.log(handleData([{ type: "user", name: "Alice", age: 25 }, { type: "product", id: 1, price: 10 }]));
console.log(handleData([{ type: "product", id: 1, price: 10 }]));
console.log(handleData([{ type: "order", orderId: "123", amount: 20 }]));
