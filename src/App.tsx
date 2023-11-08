import { useState } from "react";
import "./App.css";
import ClientInfo from "./Components/ClientInfo";
import CompanyInfo from "./Components/CompanyInfo";
import Header from "./Components/Header";
import PDFGenerator from "./Components/PDFGenerator";
import ProductInfo from "./Components/ProductInfo";

function App() {
  const [companyData, setCompanyData] = useState({
    logo: "",
    name: "",
    address: "",
    cnpj: "",
  });

  const [clientData, setClientData] = useState({
    name: "",
    cpf: "",
    phone: "",
    address: "",
  });

  const [products, setProducts] = useState<
    Array<{
      product: string;
      price: string;
      quantity: string;
      total: string;
    }>
  >([
    {
      product: "",
      price: "",
      quantity: "",
      total: "",
    },
  ]);

  const addProduct = () => {
    setProducts([
      ...products,
      {
        product: "",
        price: "",
        quantity: "",
        total: "",
      },
    ]);
  };

  const generatePDF = () => {
    const dataForPDF = {
      companyData,
      clientData,
      productsData: products,
    };

    console.log(dataForPDF);
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
