import { useState } from 'react';
import './App.css';
import ClientInfo from './Components/ClientInfo';
import CompanyInfo from './Components/CompanyInfo';
import Header from './Components/Header';
import ProductInfo from './Components/ProductInfo';
import PDFGenerator from './Components/PDFGenerator';

function App() {
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
      price: number;
      quantity: number;
      total: number;
    }>
  >([
    {
      product: '',
      price: 0,
      quantity: 0,
      total: 0,
    },
  ]);

  const addProduct = () => {
    setProducts([
      ...products,
      {
        product: '',
        price: 0,
        quantity: 0,
        total: 0,
      },
    ]);
  };

  return (
    <div>
      <Header />
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
        />
      ))}
      <PDFGenerator
        companyData={companyData}
        clientData={clientData}
        productsData={products}
      />
      <button onClick={addProduct}>Adicionar produto</button>
    </div>
  );
}

export default App;
