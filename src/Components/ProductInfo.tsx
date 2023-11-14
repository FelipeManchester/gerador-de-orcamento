import React, { useState } from 'react';

type ProductInfoProps = {
  productData: {
    product: string;
    price: string;
    quantity: number;
    total: number;
  };
  onProductDataChange: (data: any) => void;
  onAddProduct: () => void;
  onRemoveProduct: () => void;
};

const ProductInfo: React.FC<ProductInfoProps> = ({
  productData,
  onProductDataChange,
  onAddProduct,
  onRemoveProduct,
}) => {
  const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...productData, product: event.target.value };
    onProductDataChange(newData);
  };

  const [formattedPrice, setFormattedPrice] = useState('');

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue.replace(/[^0-9.,]/g, ''));

    let newFormattedPrice = ''; // use a different variable name to avoid confusion

    if (!isNaN(numericValue)) {
      newFormattedPrice = numericValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    }

    // Update the formatted price in the state
    setFormattedPrice(newFormattedPrice);

    const newData = { ...productData, price: newFormattedPrice };
    onProductDataChange(newData);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...productData, quantity: event.target.value };
    onProductDataChange(newData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
  };

  const calculateTotal = () => {
    const price = parseFloat(productData.price.replace(',', '.'));

    productData.total = price * productData.quantity;
    return productData.total;
  };

  return (
    <div className='w-full mx-6 my-6 p-6 bg-white rounded-md shadow-md'>
      <form className='flex justify-around' onSubmit={handleSubmit}>
        <div className='w-1/2 mb-4'>
          <label className='block text-gray-600 '>Produto:</label>
          <input
            type='text'
            className='border w-full py-2 px-3'
            value={productData.product}
            onChange={handleProductChange}
          />
        </div>
        <div className='w-1/8 pr-2 mb-4'>
          <label className='block text-gray-600'>Preço:</label>
          <input
            type='text'
            className='border w-full py-2 px-3'
            value={formattedPrice}
            onChange={handlePriceChange}
          />
        </div>
        <div className='w-1/8 mb-4'>
          <label className='block text-gray-600'>Quantidade:</label>
          <input
            type='number'
            className='border w-full py-2 px-3'
            value={productData.quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <div className='w-1/8 mb-4'>
          <label className='block text-gray-600'>Total:</label>
          <input
            type='number'
            className='border w-full py-2 px-3'
            value={calculateTotal()}
            disabled
          />
        </div>
        <div className='flex self-center'>
          <button
            onClick={onRemoveProduct}
            className='bg-red-500 text-white px-4 py-2 rounded-md mx-1'
          >
            -
          </button>
          <button
            onClick={onAddProduct}
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductInfo;
