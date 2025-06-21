import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";

type ProductData = {
    id : number,
    name: string,
    price : number,
    currency : string,
    image : string
}

type ProductsProps = {
    data :ProductData
}

const images : Record<string, string> = import.meta.glob('../../../assets/Products/*',{eager: true,import:'default'});


export function Product({data} : ProductsProps) {


    const image = images[`../../../assets/Products/${data.image}`];

    const [isActive,setIsActive] = useState(false);

    const addToCart = ()=>{
        setIsActive(true)
    }

    return (
        <div
            className="h-80 w-50 gap-6 bg-neutral-800 mr-2 mb-2 flex flex-col p-3 justify-center items-center rounded-xl shadow-lg border border-neutral-600 hover:border-yellow-400 transition-colors">
            <div>
                <img className="h-[88px] w-[88px] rounded-xl" src={image}/>
            </div>
            <div>
                <h3 className="text-white text-[13px] font-semibold pl-2">{data.name} </h3>
            </div>
            <div>
                <h3 className="bg-yellow-400 rounded-md text-black p-1.5 font-semibold ">
                    {data.price}
                    <small>{data.currency}</small>
                </h3>
            </div>
            <div className="flex justify-center items-center">
                {
                    isActive ? (
                        <ModifyCart data={{
                            product:data
                        }}/>
                    ) : (
                        <button
                        className="w-fit border rounded-md border-neutral-600 px-5 py-1
                      bg-yellow-400 text-black font-semibold hover:bg-black
                      hover:text-yellow-400 transition-colors duration-300 ease-in-out"
                        onClick={addToCart}>
                        Add To Cart
                    </button>)
                }
            </div>
        </div>
    );
}
