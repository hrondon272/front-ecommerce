export interface Product {
    id: number,
    name: string,
    price: number,
    image: string,
}

export interface CartDetail{
    id: number,
    product: Product,
    quantity: number
}

export interface Category{
    id: number,
    name: string,
    description: string
}