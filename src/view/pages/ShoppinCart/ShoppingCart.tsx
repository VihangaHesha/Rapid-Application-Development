import type {CartItem} from "../../../model/CartItem.ts";
import {itemsList} from "../../common/ModifyCart/ModifyCart.tsx";

interface ShoppingCartProps{
    itemList:CartItem[];
}

export function ShoppingCart({itemList} : ShoppingCartProps) {
    return (
        <div className=" bg-[#101010] rounded-2xl flex justify-center items-center px-4 py-4 mx-6 my-7">
            <div className="w-full max-w-screen-2xl ">
               <table className="min-w-full border-collapse">
                   <thead>
                   <tr className="text-white">
                       <th className="text-sm font-semibold  p-2">ID</th>
                       <th className="text-sm font-semibold p-2">Name</th>
                       <th className="text-sm font-semibold p-2">Unit Price</th>
                       <th className="text-sm font-semibold p-2">Quantity</th>
                       <th className="text-sm font-semibold p-2">Total Price</th>
                       {/*<th className="text-xs font-semibold border-neutral-600 p-2">Action</th>*/}
                   </tr>
                   </thead>
                   <tbody>
                   {
                       itemList.length === 0 ? (
                           <tr>
                               <td colSpan={5} className=" p-2 bg-neutral-700">
                                   <p className="text-center text-sm text-white">NO ITEMS TO DISPLAY !!!</p>
                               </td>
                           </tr>
                       ) : (
                           itemsList.map((item,index) => (
                               <tr key={item.product.id}
                                   /*className = "odd:bg-neutral-400 even:bg-neutral-500"
                                   This is the same of what we have done below this line (35) */
                                   className={`${index % 2 === 0 ? "bg-zinc-950" : "bg-zinc-900"} 
                                   text-white text-center hover:bg-neutral-800 hover:text-[#D4AF37]`}>
                                   <td>{item.product.id}</td>
                                   <td>{item.product.name}</td>
                                   <td>{item.product.price} {item.product.currency}</td>
                                   <td>{item.itemCount}</td>
                                   <td>{item.product.price * item.itemCount} {item.product.currency}</td>
                               </tr>
                           ))
                       )
                   }
                   </tbody>
               </table>
            </div>
        </div>
    );
}