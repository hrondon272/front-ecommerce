export interface Product {
    id: number,
    name: string,
    price: number
}

export interface CartDetail{
    id: number,
    productId: number,
    quantity: number
}

export interface Category{
    id: number,
    name: string,
    description: string
}