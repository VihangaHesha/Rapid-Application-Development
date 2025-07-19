import {Router} from "express";
import {getAllProducts, saveProduct, getProduct, updateProduct, deleteProduct} from "../controllers/product.controller";
import {authorizeRole} from "../middleware/auth.middleware";

const productRouter:Router = Router();

//Handle Requests
productRouter.get("/all",getAllProducts) //Get All
productRouter.post("/save",authorizeRole('Admin'),saveProduct) //Save
productRouter.get("/:id",getProduct); //Get Specific Product
productRouter.put("/update/:id",authorizeRole('Admin'),updateProduct); //Update Product
productRouter.delete("/delete/:id",authorizeRole('Admin'),deleteProduct); //Delete Product


export default productRouter;