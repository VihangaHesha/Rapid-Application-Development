import {useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";
export function ShoppingCart() {

    const {items} = useSelector((state:RootState)=>
    state.cart);

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
                   </tr>
                   </thead>
                   <tbody>
                   {
                       items.length === 0 ? (
                           <tr>
                               <td colSpan={5} className=" p-2 bg-neutral-700">
                                   <p className="text-center text-sm text-white">NO ITEMS TO DISPLAY !!!</p>
                               </td>
                           </tr>
                       ) : (
                           items.map((item) => (
                               <tr key={item.product.id}
                                   className={"odd:bg-zinc-950 even:bg-zinc-900 text-white text-center hover:bg-neutral-800 hover:text-[#D4AF37]"}>
                                   <td>{item.product.id}</td>
                                   <td>{item.product.name}</td>
                                   <td>{item.product.price} {item.product.currency}</td>
                                   <td>{item.quantity}</td>
                                   <td>{item.product.price * item.quantity} {item.product.currency}</td>
                                   <td className="px-4 py-3 text-center">
                                       <button
                                           className="text-[#D4AF37] hover:text-red-500 transition-colors duration-300 ease-in-out"
                                           onClick={() => {
                                               const index = items.indexOf(item);
                                               if (index !== -1) {
                                                   items.splice(index, 1);
                                               }
                                           }
                                           }>
                                       </button>
                                   </td>
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