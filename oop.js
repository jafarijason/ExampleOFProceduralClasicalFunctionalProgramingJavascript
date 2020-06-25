class Validator {
    static require = 'required'

    static validate(value, flag) {
        if (flag === this.require) {
            return value.trim.length > 0
        }
    }
}

class Product {
    constructor(title, price) {
        this.title = title
        this.price = price
    }
}

class ProductForm {
    constructor() {
        this.form = document.querySelector("#add-product");
        this.productTitle = document.querySelector("#title");
        this.prodcutPrice = document.querySelector("#price");

        this.form.addEventListener("submit", this.addProductHandler.bind(this));
    }

    addProductHandler(event) {
        event.preventDefault();

        const inputTitle = this.productTitle.value;
        const inputPrice = this.prodcutPrice.value;

        if (!Validator.validate(inputTitle, Validator.require) ||
            !Validator.validate(inputPrice, Validator.require)
        ) {
            console.log("Invalid Input");
            return
        }

        const newProduct = new Product(inputTitle, inputPrice)
        console.log(newProduct);
    }
}

new ProductForm()