'use client'

import Image from 'next/image'
import Link from 'next/link'
import {useSelector} from 'react-redux'
import icon_cart from '@/app/assets/images/icons8-cart-80.png'
import icon_warehouse from '@/app/assets/images/warehouse.png'

const Header = () => {
  const numberCart = useSelector((state: any) => state._todoProduct.numberCart)
  const numberWarehouse = useSelector((state: any) => state._todoWarehouse.numberWarehouse)
  return (
    <div className="w-full p-5 bg-gray-300">
      <div className="w-full max-w-6xl m-auto px-4 flex sm:flex-row items-center justify-between flex-col">
        <Link href={'/'} className='font-bold text-xl'>Home</Link>
        <div className='flex flex-row gap-2'>
          <Link href={'/cart'} className="bg-white p-2 block rounded-md">
            <div className="flex flex-row gap-2">
              <Image src={icon_cart} alt='cart' width={25} height={25} />Cart :<span className="font-bold text-red-500 inline-block">{numberCart}</span>
            </div>
          </Link>
          <Link href={'/warehouse'} className="bg-white p-2 block rounded-md">
            <div className="flex flex-row gap-2">
              <Image src={icon_warehouse} alt='cart' width={25} height={25} />Warehouse : <span className="font-bold text-red-500 inline-block">{numberWarehouse}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header