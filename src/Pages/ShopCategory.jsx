import React, { useContext , useState, useEffect } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  const [sortedProducts, setSortedProducts] = useState([])
  const [sortType, setSortType] = useState('')
  // console.log(props.category);

  useEffect(()=>{
    let sortedArray = [...all_product].filter(item=> item.category === props.category)

    switch(sortType){
      case 'lowToHigh':
        sortedArray.sort((a,b)=> a.new_price - b.new_price)
        break;
        case 'highToLow':
          sortedArray.sort((a,b)=> b.new_price - a.new_price);
          break;
          case 'latest':
        sortedArray.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
        case 'bestSelling':
          sortedArray.sort((a, b) => b.sales - a.sales);
          break;
        default:
          break;
    }
    setSortedProducts(sortedArray)
  }, [sortType, all_product, props.category])

  const handleSortChange = (e)=>{
    setSortType(e.target.value)
  }
  return (
    <div className="container">
      <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className='shopcategory-indexSort'>
        
        <div className='shopcategory-sort'>
          {/* Sort by <img src={dropdown_icon} alt="" /> */}
          <select value={sortType} onChange={handleSortChange} name="" id="">
            <option value="" disabled selected hidden>SORT BY</option>
            <option value="lowToHigh">low to high</option>
            <option value="highToLow">high  to low</option>
            
            

          </select>

        </div>
      </div>
      <div className="shopcategory-products row">
      {sortedProducts.map((item, i) => (
  
    <div key={i} className="col-12 col-lg-4 col-md-6">
      <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    </div>
  
))}

        
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
    </div>
  )
}

export default ShopCategory
