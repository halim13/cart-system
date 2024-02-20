'use client'

import {DecreaseQuantity, DeleteCart, IncreaseQuantity} from '@/app/redux/actions'
import Image from 'next/image'
import {useDispatch, useSelector} from 'react-redux'

const CartPage = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: any) => state._todoProduct)

  const ListCart: any[] = []

  let TotalCart = 0

  Object.keys(items.Carts).forEach((item) => {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price
    ListCart.push(items.Carts[item])
  })

  return (
    <div className="w-full max-w-4xl m-auto">
      <table className="w-full table-auto">
        <caption className="caption-top text-left font-bold py-5">
          Carts
        </caption>
        <thead>
          <tr>
            <td className="border border-slate-300 p-2"></td>
            <td className="border border-slate-300 p-2">Image</td>
            <td className="border border-slate-300 p-2">Title</td>
            <td className="border border-slate-300 p-2">Price</td>
            <td className="border border-slate-300 p-2">Quantity</td>
            <td className="border border-slate-300 p-2">Total Price</td>
          </tr>
        </thead>
        <tbody>
          {
            ListCart && ListCart.map((cart: any, key: number) => {
              return (
                <tr key={cart.id}>
                  <td className="border border-slate-300 p-2">
                    <button className="bg-red-500 w-10 text-center text-xl px-2 py-1 text-white ml-5" onClick={()=>dispatch(DeleteCart(key))}>X</button>
                  </td>
                  <td className="border border-slate-300 p-2">
                    <Image src={cart.image} alt={cart.name} width={150} height={150} />
                  </td>
                  <td className="border border-slate-300 p-2">{cart.name}</td>
                  <td className="border border-slate-300 p-2">{cart.price}</td>
                  <td className="border border-slate-300 p-2">
                    <div className="flex flex-row gap-2 justify-center">
                      <span className="text-xl px-2 py-1 text-black cursor-pointer" onClick={()=>dispatch(DecreaseQuantity(key))}>-</span>
                      <span className="bg-gray-400 w-10 text-center text-xl px-1 py-1 text-white font-bold">{cart.quantity}</span>
                      <span className="text-xl px-2 py-1 text-black cursor-pointer" onClick={()=>dispatch(IncreaseQuantity(key))}>+</span>
                    </div>
                  </td>
                  <td className="border border-slate-300 p-2">
                    {(cart.quantity*cart.price).toLocaleString('en-US')} $
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className="w-full">
        <div className="w-full mt-4">
          <h1 className="font-bold text-2xl text-red-500">
            Total: {Number(TotalCart).toLocaleString('en-US')} $
          </h1>
        </div>
      </div>
    </div>
  )
}

export default CartPage