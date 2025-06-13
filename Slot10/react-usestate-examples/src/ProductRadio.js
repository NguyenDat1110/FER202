import React, { useState } from 'react';

function ProductRadio() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A', price: 100000 },
    { id: 2, name: 'Sản phẩm B', price: 200000 },
    { id: 3, name: 'Sản phẩm C', price: 150000 },
    { id: 4, name: 'Sản phẩm D', price: 300000 },
  ]);

  const [selectedProduct, setSelectedProduct] = useState('');

  const handleRadioChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    setSelectedProduct(productId);
  };

  const getSelectedProductInfo = () => {
    if (!selectedProduct) return null;
    return products.find(p => p.id === selectedProduct);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ví dụ 4: Product Radio Button</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3>Chọn một sản phẩm:</h3>
        {products.map(product => (
          <div key={product.id} style={{ marginBottom: '10px' }}>
            <input
              type="radio"
              id={`product-${product.id}`}
              name="product"
              value={product.id}
              checked={selectedProduct === product.id}
              onChange={handleRadioChange}
            />
            <label htmlFor={`product-${product.id}`} style={{ marginLeft: '8px' }}>
              {product.name} - {product.price.toLocaleString('vi-VN')} VNĐ
            </label>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div style={{ 
          backgroundColor: '#e8f5e8', 
          padding: '15px', 
          borderRadius: '5px',
          border: '1px solid #4CAF50'
        }}>
          <h3>Sản phẩm đã chọn:</h3>
          <p><strong>Tên:</strong> {getSelectedProductInfo().name}</p>
          <p><strong>Giá:</strong> {getSelectedProductInfo().price.toLocaleString('vi-VN')} VNĐ</p>
        </div>
      )}

      <button 
        onClick={() => setSelectedProduct('')}
        style={{ 
          marginTop: '10px', 
          padding: '8px 15px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Clear Selection
      </button>
    </div>
  );
}

export default ProductRadio;