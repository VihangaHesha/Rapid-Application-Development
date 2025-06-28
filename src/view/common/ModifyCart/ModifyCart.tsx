import type {CartItem} from "../../../model/CartItem.ts";
import type {ProductData} from "../../../model/ProductData.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {decreaseQty, increaseQty} from "../../../slices/cartSlice.ts";

interface ModifyCartProps{
    data : {product : ProductData}
}

export const itemsList : CartItem[] = [];

export function ModifyCart({data} : ModifyCartProps) {
    const dispatch = useDispatch<AppDispatch>()


    const item = useSelector((state:RootState)=> state.cart.items.find(
        cartItem => cartItem.product.id=== data.product.id))

    const decreaseItemCount = () =>{
        if(item && item.quantity>1){
            dispatch(decreaseQty(data.product.id))
        }else{
            alert("Item Count can't be less than 1 !!!")
        }
    }

    const increaseItemCount =() =>{
        dispatch(increaseQty(data.product.id))
    }
    return (
        <div className="w-full mt-1 p-[2.4px] text-[8px] text-center">
            <button className="float-left font-semibold text-[16px] w-[25px] h-[25px] bg-yellow-400 text-black border rounded-md border-neutral-600 hover:bg-black
                      hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            onClick={decreaseItemCount}>
                -
            </button>
            <small className="text-[16px] font-semibold m-6 ">{item?.quantity}</small>
            <button className="float-right font-semibold text-[16px] w-[25px] h-[25px] bg-yellow-400 text-black
                    border rounded-md border-neutral-600 hover:bg-black
                    hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            onClick={increaseItemCount}>
                +
            </button>
        </div>
    );
}