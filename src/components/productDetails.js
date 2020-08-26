import React, { Component } from 'react'

export default class ProductDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            price:"",
            category:"amazona product",
            productImage:""
       }
       // this.onChangeDate = this.onChangeDate.bind(this);
       this.handleSubmit=this.handleSubmit.bind(this)
       this.handleChange=this.handleChange.bind(this)
    }
    
    handleSubmit(){
    const { name,price, category,productImage} = this.state;
         const product={
            name:name,
             price:price,
             category:category,
             productImage:productImage
         }
    const product = axios.get('http://localhost:3001/products/'+this.props.match.params.id, product).then(response => {
        console.log("success",response.data)
})
.catch((error) => {
    console.log(error);
  })
}
render(){
    return (
        <div>
           <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
            <div className="details-image">
              <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
               
                <li>
                  Price: <b>{product.price}</b>
                </li>
                <li>
                  Description:
                  <div>{product.description}</div>
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                <li>Price: {product.price}</li>
                <li>
                  Status:{' '}
                  {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                </li>
                <li>
                  Qunatity:{' '}
                  <select
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  {product.countInStock > 0 && (
                    <button
                      onClick={handleAddToCart}
                      className="button primary"
                    >
                      Add to Cart
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        
        </div>
    )
                  }
}


