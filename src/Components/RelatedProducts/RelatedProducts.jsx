import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
   <div className="container">
     <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className='row'>
        {data_product.map((item, i)=> (
          <div key={i} className="col-12 col-lg-4 col-md-6">
             <Item  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            </div>
       ))}
      </div>
    </div>
   </div>
  )
}

export default RelatedProducts
