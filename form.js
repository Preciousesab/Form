import React, { useState } from 'react';

function NewProductForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product submitted:', { name, description, category, quantity, price });
  };
  return (
    <>
          <h1>New Product</h1>
          <form onSubmit={handleSubmit}> <div>
              <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                  <label htmlFor="description">Description</label>
                  <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
              </div>
              <div>
                  <label htmlFor="category">Category</label>
                  <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
              </div>
              <div></div>
              <label htmlFor="quantity">Quantity</label>
              <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} required />
          </div><div>
              <label htmlFor="price">Price</label>
              <input type="number" id="price" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} required />
          </div> 
          <button type="submit"> Submit </button>
          </form> 
          <div/>
         </> );
  
}

export default NewProductForm;