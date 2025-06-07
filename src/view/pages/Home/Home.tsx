// import "./Home.css"
import {useEffect, useState} from "react";
import {Product} from "../../common/Product/Product.tsx";

type ProductData = {
    id : number,
    name: string,
    price : number,
    currency : string,
    image : string
}

export function Home() {

    const [products,setProducts] = useState<ProductData[]>([]);

    useEffect(()=>{
        /*We use this function's body as an asynchronous function.The response of the fetchData
        functions is in inference typed , it is returning a "promise typed data"*/
        const fetchData = async () =>{

            try {
                /*This function follows an asynchronous flow so "await" until the fetch method fetches the data into the
                response to go to the next line*/
                const response = await fetch('./product-data.json');

                /*This is also an asynchronous function so it also has to be waited until the fetch is completed*/
                const jsonData = await response.json();
                setProducts(jsonData);
                console.log(products)
            }catch (error){
                console.error('Error in fetching data: ',error)
            }

        }
        fetchData()
    },[]);

    return (
        <div className="font-sans  text-white m-0 p-0 max-h-screen">
            <div className="flex flex-wrap ml-[1px] mt-5 mb-5 justify-center items-center mx-auto">
                {
                    products.map((product) => (
                    <Product key={product.id} data={product}/>
                    ))
                }
            </div>
        </div>
    );
}