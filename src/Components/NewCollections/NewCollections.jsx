import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className="container">
      <div className='new-collections' id='newCollection'>
      <h1>New Collections</h1>
      <hr />
    <div className="row">
   
        {new_collections.map((item,i)=>(
        
          <div key={i} className="col-12 col-lg-4 col-md-6">
           <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </div>
        ))}
      
    </div>
    </div>
    </div>
  )
}

export default NewCollections
