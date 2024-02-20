'use client'

import {fetcher} from '@/app/libs'
import {AddCart} from '@/app/redux/actions'
import {IProduct} from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import {useDispatch} from 'react-redux'
import useSWR from 'swr'

const ProductPage = () => {
  const dispatch = useDispatch()
  const {data, error, isLoading} = useSWR<any>(
    `/api/products`,
    fetcher
  )

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <div className="w-full">
      <ul className="flex flex-wrap mt-4">
        {
          data && data.result.products.map((product: IProduct) => {
            return (
              <li key={product.id} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4">
                <div className="my-2 bg-white rounded-[20px] overflow-hidden relative sm:h-auto hover:shadow-md border-gray-500/20 border-[1px]">
                  <Link href={`/product/${product.id}`}><Image className='w-full block h-[230px] border-[1px] border-gray-300' src={product.thumbnail} width={200} height={120} alt='' /></Link>
                  <div className="p-4">
                    <h1 className="font-bold text-xl text-red-500 line-clamp-1">{product?.title}</h1>
                    <h2 className="capitalize sm:text-[14px] md:text-[16px] font-bold"><Link href={`/product/${product.id}`}>{product.brand}</Link></h2>
                    <p className="text-gray-500 line-clamp-2">{product?.description}</p>
                    <p className="text-gray-500">Price: {product?.price} $</p>
                  </div>
                  <button className="w-full bg-yellow-400 px-4 py-2 text-white mt-1" onClick={() => dispatch(AddCart(product))}>Add to Cart</button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ProductPage