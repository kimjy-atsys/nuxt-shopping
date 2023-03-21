import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:3000',
})

const products = axios.create({
    baseURL: 'http://localhost:3000/products',
})

const carts = axios.create({
    baseURL: 'http://localhost:3000/carts',
})

function fetchProductById(id) {
    return products.get(`/${id}`)
    // return instance.get(`/products/${id}`)
}

function fetchProductByKeyword(keyword) {
    return instance.get(`/products`, {
        params: {
            name_like: keyword,
        },
    })
}

// carts
function fetchCartItems() {
    return instance.get('/carts')
}

function createCartItem(cartItem) {
    return carts.post('', cartItem)
}

export { fetchProductById, fetchProductByKeyword, fetchCartItems, createCartItem }