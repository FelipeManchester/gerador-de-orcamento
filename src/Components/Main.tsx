import { useState } from 'react';
import CompanyInfo from './CompanyInfo';
import ClientInfo from './ClientInfo';
import ProductInfo from './ProductInfo';
import PDFGenerator from './PDFGenerator';

const Main = () => {
  const [companyData, setCompanyData] = useState({
    logo: '',
    name: '',
    address: '',
    cnpj: '',
  });

  const [clientData, setClientData] = useState({
    name: '',
    cpf: '',
    phone: '',
    address: '',
  });

  const [products, setProducts] = useState<
    Array<{
      product: string;
      price: string;
      quantity: number;
      total: number;
    }>
  >([
    {
      product: '',
      price: '',
      quantity: 0,
      total: 0,
    },
  ]);

  const addProduct = () => {
    setProducts([
      ...products,
      {
        product: '',
        price: '',
        quantity: 0,
        total: 0,
      },
    ]);
  };

  const removeProduct = (index: number) => {
    if (products.length > 1) {
      const updatedProducts = [...products];
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
    }
  };

  return (
    <main className='flex flex-wrap'>
      <CompanyInfo onCompanyDataChange={(data) => setCompanyData(data)} />
      <ClientInfo onClientDataChange={(data) => setClientData(data)} />
      {products.map((productData, index) => (
        <ProductInfo
          key={index}
          productData={productData}
          onProductDataChange={(data) => {
            const updatedProducts = [...products];
            updatedProducts[index] = data;
            setProducts(updatedProducts);
          }}
          onAddProduct={() => addProduct()}
          onRemoveProduct={() => removeProduct(index)}
        />
      ))}
      <PDFGenerator
        companyData={companyData}
        clientData={clientData}
        productsData={products}
      />
    </main>
  );
};

export default Main;
