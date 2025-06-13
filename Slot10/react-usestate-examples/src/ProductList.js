import React, { useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ví dụ 3: Product Checkbox List</h2>
      <div style={{ marginBottom: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ marginBottom: '10px' }}>
            <input
              type="checkbox"
              id={product.id}
              value={product.id}
              checked={selectedProducts.includes(product.id)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={product.id} style={{ marginLeft: '8px' }}>
              {product.name}
            </label>
          </div>
        ))}
      </div>
      
      {selectedProducts.length > 0 && (
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
          <strong>Bạn đã chọn các sản phẩm: </strong>
          {selectedProducts.map(id => 
            products.find(p => p.id === id).name
          ).join(', ')}
        </div>
      )}
      
      <button 
        onClick={() => setSelectedProducts([])}
        style={{ marginTop: '10px', padding: '5px 10px' }}
      >
        Clear All
      </button>
    </div>
  );
}

export default ProductList;