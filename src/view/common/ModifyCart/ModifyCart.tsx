import {useEffect, useState} from "react";
import type {CartItem} from "../../../model/CartItem.ts";
import type {ProductData} from "../../../model/ProductData.ts";

interface ModifyCartProps{
    data : {product : ProductData}
}

export const itemsList : CartItem[] = [];

export function ModifyCart({data} : ModifyCartProps) {

    const [itemCount,setItemCount] = useState(1)

    useEffect(() =>{
        const existingItem = itemsList.find(item => item.product.id === data.product.id)

        if (existingItem) {
            existingItem.itemCount = itemCount;
        }else {
            itemsList.push({
                product: data.product,
                itemCount: itemCount
            });
        }
        console.log(itemsList);
    },[itemCount,data])

    const decreaseItemCount = () =>{
        setItemCount( prevValue => prevValue > 1
            ? prevValue -1
            : (alert("Item count can't be less that 1"), prevValue))
    }

    const increaseItemCount =() =>{
    setItemCount( preCount => preCount +1)
    }
    return (
        <div className="w-full mt-1 p-[2.4px] text-[8px] text-center">
            <button className="float-left font-semibold text-[16px] w-[25px] h-[25px] bg-yellow-400 text-black border rounded-md border-neutral-600 hover:bg-black
                      hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            onClick={decreaseItemCount}>
                -
            </button>
            <small className="text-[16px] font-semibold m-6 ">{itemCount}</small>
            <button className="float-right font-semibold text-[16px] w-[25px] h-[25px] bg-yellow-400 text-black
                    border rounded-md border-neutral-600 hover:bg-black
                    hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            onClick={increaseItemCount}>
                +
            </button>
        </div>
    );
}