import React from 'react';

type ProductInfoProps = {
  productData: {
    product: string;
    price: string;
    quantity: number;
    total: number;
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
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9.,]/g, ''); // Remove non-numeric characters except dot and comma
    const newData = { ...productData, price: numericValue };
    onProductDataChange(newData);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...productData, quantity: event.target.value };
    onProductDataChange(newData);
  };

  const calculateTotal = () => {
    const price = parseFloat(productData.price.replace(',', '.'));

    productData.total = price * productData.quantity;
    return productData.total;
  };

  return (
    <div>
      <form>
        <label>Produto:</label>
        <input
          type='text'
          value={productData.product}
          onChange={handleProductChange}
        />
        <label>Preço:</label>
        <input
          type='text'
          value={productData.price}
          onChange={handlePriceChange}
        />
        <label>Quantidade:</label>
        <input
          type='number'
          value={productData.quantity}
          onChange={handleQuantityChange}
        />
        <label>Total:</label>
        <input type='number' value={calculateTotal()} disabled />
      </form>
    </div>
  );
};

export default ProductInfo;
