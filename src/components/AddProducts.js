import React from 'react'
import { useState } from "react";

 

const AddProducts = (props) => {
const [image, setImage] = useState("");
 const [brand, setBrand] = useState("");
 const [size, setSize] = useState("");
 const [price, setPrice] = useState("");

 const submitHandler = (e) => {
    e.preventDefault();

    if(!image || !brand || !size || !price) {
        alert('Please fill up the form')
        return

    }
    props.AddProduct(image, brand, size, price);
    
    setImage('')
    setBrand('')
    setSize('')
    setPrice('')
};

return(
    <form className='YR' onSubmit={submitHandler}>
    <div class="form-row" >
      
  
<div class="form-group">
  <label class="col-md-4 control-label" for="product_name">PRODUCT IMAGE</label>  
  <div class="col-md-4">
  <input id="product_name" name="product_name" placeholder="PRODUCT IMAGE" class="form-control input-md" required="" type="text" value={image}
           onChange={(e) => setImage(e.target.value)} />
    
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_bramd">PRODUCT Brand</label>  
  <div class="col-md-4">
  <input id="product_brand" name="product_brand" placeholder="PRODUCT BRAND" class="form-control input-md" required="" type="text" value={brand}
           onChange={(e) => setBrand(e.target.value)} />
    
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_size">PRODUCT SIZE</label>  
  <div class="col-md-4">
  <input id="product_size" name="product_size" placeholder="PRODUCT SIZE" class="form-control input-md" required="" type="text" value={size}
           onChange={(e) => setSize(e.target.value)} />
    
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="product_price">PRODUCT PRICE</label>  
  <div class="col-md-4">
  <input id="product_name" name="product_name" placeholder="PRODUCT PRICE" class="form-control input-md" required="" type="text" value={price}
           onChange={(e) => setPrice(e.target.value)} />
    
  </div>
</div>
 

<button type="submit" class="btn btn-outline-dark lk">Add Product</button>

</div>
</form>
  
)
}
export default  AddProducts;
   