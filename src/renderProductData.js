import React from 'react'
import "./style.css"  

export default function RenderProductData(props) {
  console.log(props,"I m child component");
  return (

    <div>
      {props.data.map((item)=>
      {
        return(
          <div className='product-container'>
            <h1 className='category-name'> {item.category.name}</h1>
            <div className='parent-item-container'>   
              {item.items.map((productData)=>
              {
                return(
                  <div className='product-item-container'>
                    <img src={productData.thumbnail_url}/>
                    <h3>{productData?.name}</h3>
                      <p className='price'>
                        <span className='oprice'> INR {productData.price}</span>
                         <span className='dprice'> INR {productData.discounted_price}</span> 
                      </p>

                    </div>
                )
              })}
              
              </div>
            
            
            
             </div>

  






        )
      }
      
      
      
      
      )}
    </div>
  )
   
}
