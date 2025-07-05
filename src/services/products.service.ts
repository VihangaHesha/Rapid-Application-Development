import {productList} from "../db/db";
import {Product} from "../model/product.model";


const getAllProducts = ():Product[] => {
    return productList
}