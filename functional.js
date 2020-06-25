const required = "required";

const validate = (value, flag) => {
    if (flag === required) {
        return value.trim().length > 0;
    }
};

const getProductData = (inputElement) => {
    return document.querySelector(inputElement).value;
};

const createProduct = (title, price) => {
    if (!validate(title, required) || !validate(price, required)) {
        throw new Error("invalid Input");
    }

    return {
        title: title,
        price: price,
    };
};

const addProductHandler = (event) => {
    event.preventDefault();

    const inputTitle = getProductData("#title");
    const inputPrice = getProductData("#price");

    try {
        const newProduct = createProduct(inputTitle, inputPrice);
        console.log(newProduct);
    } catch (err) {
        console.log(err);
    }
};

const inputForm = (formId, formSubmitHandler) => {
    const form = document.querySelector(formId);
    form.addEventListener("submit", formSubmitHandler);
};

inputForm("#add-product", addProductHandler);