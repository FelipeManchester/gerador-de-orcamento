import React from 'react';

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

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9.,]/g, '');
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
    <div className='max-w-md mx-auto p-6 bg-white rounded-md shadow-md'>
      <form className='flex flex-wrap'>
        <div className='w-full mb-4'>
          <label className='block text-gray-600 mb-2'>Produto:</label>
          <input
            type='text'
            className='border w-full py-2 px-3'
            value={productData.product}
            onChange={handleProductChange}
          />
        </div>
        <div className='w-1/2 pr-2 mb-4'>
          <label className='block text-gray-600 mb-2'>Preço:</label>
          <input
            type='text'
            className='border w-full py-2 px-3'
            value={productData.price}
            onChange={handlePriceChange}
          />
        </div>
        <div className='w-1/4 mb-4'>
          <label className='block text-gray-600 mb-2'>Quantidade:</label>
          <input
            type='number'
            className='border w-full py-2 px-3'
            value={productData.quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <div className='w-full mb-4'>
          <label className='block text-gray-600 mb-2'>Total:</label>
          <input
            type='number'
            className='border w-full py-2 px-3'
            value={calculateTotal()}
            disabled
          />
        </div>
      </form>
      <div className='flex justify-between'>
        <button
          onClick={onRemoveProduct}
          className='bg-red-500 text-white px-4 py-2 rounded-md'
        >
          Remover produto
        </button>
        <button
          onClick={onAddProduct}
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
        >
          Adicionar produto
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
