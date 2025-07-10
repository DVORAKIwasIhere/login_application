import { ProductProps } from '@/app/utils/interfaces'
import React from 'react'

 const ProductCard = ({products}: ProductProps) => {
  return (
    <div>{products.title}</div>
  )
}

export default ProductCard