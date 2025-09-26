import React from 'react'
import { useLoaderData } from 'react-router'

export default function Product() {
  const {products} = useLoaderData();
  return (
    <div>Product
      <img src='https://fastly.picsum.photos/id/409/200/300.jpg?blur=5&hmac=j-ArVmIMbFGKe5wg4jUJdFs2QJH5AGQdmW5HKhw9euU'/>
      <hr/>
      <ul>
        {products.map((products)=>(
          <li key={products.id}>
            {products.id}:{products.title}
          </li>
      ))}
      </ul>
    </div>

  )
}
