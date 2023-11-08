import React, { useState } from "react";

type ProductInfoProps = {
  productData: {
    product: string;
    price: string;
    quantity: string;
    total: string;
  };
  onProductDataChange: (data: any) => void;
};

const ProductInfo: React.FC<ProductInfoProps> = ({
  productData,
  onProductDataChange,
}) => {
  const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...productData, product: event.target.value };
    onProductDataChange(newData);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...productData, price: event.target.value };
    onProductDataChange(newData);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...productData, quantity: event.target.value };
    onProductDataChange(newData);
  };

  // Calculate the total based on the entered price and quantity
  const calculateTotal = () => {
    const price = parseFloat(productData.price);
    const quantity = parseFloat(productData.quantity);

    if (!isNaN(price) && !isNaN(quantity)) {
      const newData = { ...productData, total: (price * quantity).toString() };
      onProductDataChange(newData);
    }
  };

  return (
    <form>
      <h2>Informe os produtos:</h2>
      <label>Produto:</label>
      <input
        type="text"
        value={productData.product}
        onChange={handleProductChange}
      />
      <label>Preço:</label>
      <input
        type="number"
        value={productData.price}
        onChange={handlePriceChange}
      />
      <label>Quantidade:</label>
      <input
        type="text"
        value={productData.quantity}
        onChange={handleQuantityChange}
        onBlur={calculateTotal}
      />
      <label>Total:</label>
      <input type="text" value={productData.total} disabled />
    </form>
  );
};

export default ProductInfo;
