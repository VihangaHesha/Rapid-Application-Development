import {Request,Response} from "express";
import * as productService from "../services/products.service"

// 200 - Success
// 400 - Bad Request
// 404 - Not Found
// 500 - Error
// 201 - Created

export const getAllProducts = (req:Request, res:Response) => {
    try {
        const products = productService.getAllProducts();
        res.status(200).json(products);
    }catch (error){
        console.error(error)
        res.status(500).json({
            error:'Something Went Wrong!!!'
        })
    }
}

export const saveProduct = (req:Request,res:Response) => {
    try{
        const newProduct = req.body;
        const validationError = productService.validateProduct(newProduct);

        if(validationError){
            res.status(400).json({error:validationError});
            return
        }
        const savedProduct = productService.saveProduct(newProduct);
        res.status(201).json(savedProduct)

    }catch (error){
        console.error(error)
        res.status(500).json({
            error:'Something Went Wrong!!!'
        })
    }
}

export const getProduct = (req:Request,res:Response) => {
    try{
        const productId = parseInt(req.params.id);
        if (isNaN(productId)){
            res.status(400).json({error:'Invalid Product ID!'});
            return
        }
        const products =  productService.getProductById(productId)
        if (!products){
            res.status(404).json({error:'Product Not Found !!!'});
            return;
        }
        res.status(200).json(products);
    }catch (error){
        console.error(error)
        res.status(500).json({
            error:'Something Went Wrong!!!'
        })
    }
}

export const updateProduct = (req:Request,res:Response) => {
    try{
        const productId = parseInt(req.params.id);
        if (isNaN(productId)){
            res.status(400).json({error:'Invalid Product ID!'});
            return
        }
        const updatedData = req.body
        const updatedProducts = productService.updateProduct(productId,updatedData)
        if (!updatedProducts){
            res.status(404).json({error:'Products Not Found!!'});
            return;
        }
        res.status(200).json(updatedProducts)
    }catch (error){
        console.error(error)
        res.status(500).json({
            error:'Something Went Wrong!!!'
        })
    }
}

export const deleteProduct = (req:Request,res:Response) => {
    try{
        const productId = parseInt(req.params.id);
        if (isNaN(productId)){
            res.status(400).json({error:'Invalid Product ID!'});
            return
        }
        const deletedProduct = productService.deleteProduct(productId)
        if (!deletedProduct){
            res.status(404).json({error:'Product Not Found!'});
            return;
        }
        res.status(200).json({message:'Product has successfully deleted!'})
    }catch (error){
        console.error(error)
        res.status(500).json({
            error:'Something Went Wrong!!!'
        })
    }
}