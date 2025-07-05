import {productList} from "../db/db";
import {Product} from "../model/product.model";
import productRouter from "../routes/product.routes";

export const getAllProducts = ():Product[] => {
    return productList
}

export const saveProduct = (product : Product):Product => {
    productList.push(product)
    return product
}

export const getProductById = (id : number):Product | undefined => {
    return productList.find(product => product.id === id);
}

export const updateProduct = (id : number, data:Product) => {
    const product = productList.find(product => product.id === id)
    if (!product){
        return null
    }
    Object.assign(product,data)
    return product

}


export const deleteProduct = (id : number) => {
    const index = productList.findIndex(product => product.id === id);
    if(index === -1){
        return false;
    }
    productList.splice(index,1)
    return true
}