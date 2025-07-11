import {Router} from "express";
import {getAllProducts, saveProduct, getProduct, updateProduct, deleteProduct} from "../controllers/product.controller";

const productRouter:Router = Router();

//Handle Requests
productRouter.get("/all",getAllProducts) //Get All
productRouter.post("/save",saveProduct) //Save
productRouter.get("/:id",getProduct); //Get Specific Product
productRouter.put("/update/:id",updateProduct); //Update Product
productRouter.delete("/delete/:id",deleteProduct); //Delete Product


export default productRouter;