import React from 'react';

type ProductInfoProps = {
  productData: {
    product: string;
    price: number;
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
    const newData = { ...productData, price: event.target.value };
    onProductDataChange(newData);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...productData, quantity: event.target.value };
    onProductDataChange(newData);
  };

  const calculateTotal = () => {
    productData.total = productData.price * productData.quantity;
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
          type='number'
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
