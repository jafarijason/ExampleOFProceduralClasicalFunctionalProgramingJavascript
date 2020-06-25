const form = document.querySelector('#add-product')
const productTitle = document.querySelector('#title')
const productPrice = document.querySelector('#price')

function addProducthandler(event) {
    event.preventDefault();

    const inputTitle = productTitle.value
    const inputPrice = productPrice.value

    if (
        inputTitle.trim().length === 0 ||
        inputPrice.trim().length === 0
    ) {
        console.log("Invalid Input");
        return
    }

    const product = {
        title: inputTitle,
        price: inputPrice
    }

    console.log(product);

}


form.addEventListener('submit', addProducthandler)