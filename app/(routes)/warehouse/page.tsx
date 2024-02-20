'use client'

import {AddWarehouse, DecreaseQuantityWarehouse, DeleteWarehouse, IncreaseQuantityWarehouse} from '@/app/redux/actions'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

const WarehousePage = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [quantity, setQuantity] = useState<string>('')

  const items = useSelector((state: any) => state._todoWarehouse)

  console.log({items})
  const ListWarehouse: any[] = []

  let TotalWarehouse = 0

  const clearForm = () => {
    setTitle('')
    setPrice('')
    setQuantity('')
  }

  const AddToWarehouse = () => {
    dispatch(AddWarehouse({
      id: new Date().getTime(),
      title,
      price,
      quantity,
    }))
    clearForm()
  }

  Object.keys(items.Carts).forEach((item) => {
    TotalWarehouse += items.Carts[item].quantity * items.Carts[item].price
    ListWarehouse.push(items.Carts[item])
  })

  return (
    <div className="w-full max-w-4xl m-auto">
      <div className="w-full justify-between flex flex-row mt-2">
        <caption className="caption-top text-left font-bold py-5">
          Warehouse
        </caption>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-2">
        <div className="sm:col-span-3">
          <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2"
            onChange={(e:any)=>setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-2">
        <div className="sm:col-span-3">
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2"
            onChange={(e:any)=>setPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-2">
        <div className="sm:col-span-3">
          <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={quantity}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2"
            onChange={(e:any)=>setQuantity(e.target.value)}
          />
        </div>
      </div>
      <div className='flex flex-row gap-2'>
        <button className="bg-yellow-400 px-4 py-2 text-white mt-1 mb-3" onClick={() => AddToWarehouse()}>Add to Warehouse</button>
        <button className="bg-red-400 px-4 py-2 text-white mt-1 mb-3" onClick={() => clearForm()}>Clear</button>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <td className="border border-slate-300 p-2"></td>
            <td className="border border-slate-300 p-2">Title</td>
            <td className="border border-slate-300 p-2">Price</td>
            <td className="border border-slate-300 p-2">Quantity</td>
            <td className="border border-slate-300 p-2">Total Price</td>
          </tr>
        </thead>
        <tbody>
          {
            ListWarehouse && ListWarehouse.map((cart: any, key: number) => {
              return (
                <tr key={cart.id}>
                  <td className="border border-slate-300 p-2">
                    <button className="bg-red-500 w-10 text-center text-xl px-2 py-1 text-white ml-5" onClick={() => dispatch(DeleteWarehouse(key))}>X</button>
                  </td>
                  <td className="border border-slate-300 p-2">{cart.name}</td>
                  <td className="border border-slate-300 p-2">{cart.price}</td>
                  <td className="border border-slate-300 p-2">
                    <div className="flex flex-row gap-2 justify-center">
                      <span className="text-xl px-2 py-1 text-black cursor-pointer" onClick={() => dispatch(DecreaseQuantityWarehouse(key))}>-</span>
                      <span className="bg-gray-400 w-10 text-center text-xl px-1 py-1 text-white font-bold">{cart.quantity}</span>
                      <span className="text-xl px-2 py-1 text-black cursor-pointer" onClick={() => dispatch(IncreaseQuantityWarehouse(key))}>+</span>
                    </div>
                  </td>
                  <td className="border border-slate-300 p-2">
                    {(cart.quantity * cart.price).toLocaleString('en-US')} $
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
            Total: {Number(TotalWarehouse).toLocaleString('en-US')} $
          </h1>
        </div>
      </div>
    </div>
  )
}

export default WarehousePage