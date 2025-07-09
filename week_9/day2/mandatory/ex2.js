var Product = /** @class */ (function () {
    function Product(id, name, price) {
        var _this = this;
        this.getProductInfo = function () {
            return "Le produit ".concat(_this.name, " a un prix de ").concat(_this.price, " euros.");
        };
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var product1 = new Product(1, "iPhone", 1000);
console.log(product1.getProductInfo());
