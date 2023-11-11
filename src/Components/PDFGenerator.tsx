import {
  Document,
  Page,
  Text,
  View,
  PDFViewer,
  Image,
} from '@react-pdf/renderer';
import { useRef } from 'react';
import logo from '../assets/drogaria.jpg';

type PDFGeneratorProps = {
  companyData: CompanyData;
  clientData: ClientData;
  productsData: ProductsData[];
};

type CompanyData = {
  name: string;
  address: string;
  cnpj: string;
};

type ClientData = {
  name: string;
  cpf: string;
  phone: string;
  address: string;
};

type ProductsData = {
  product: string;
  price: string;
  quantity: number;
  total: number;
};

const PDFGenerator: React.FC<PDFGeneratorProps> = ({
  companyData,
  clientData,
  productsData,
}) => {
  const PDFViewerRef = useRef(null);
  const generatePDF = () => {
    return (
      <PDFViewer width={800} height={500} ref={PDFViewerRef}>
        <Document>
          <Page>
            <View>
              <Image src={logo} />
              <Text>Empresa:{companyData.name}</Text>
              <Text>Endereço:{companyData.address}</Text>
              <Text>CNPJ:{companyData.cnpj}</Text>
              <Text>Nome cliente: {clientData.name}</Text>
              <Text>CPF: {clientData.cpf}</Text>
              <Text>Telefone: {clientData.phone}</Text>
              <Text>Endereço: {clientData.address}</Text>
              {productsData.map((product, index) => (
                <View key={index}>
                  <Text>Produto: {product.product}</Text>
                  <Text>Preço: R$ {product.price}</Text>
                  <Text>Quantidade: {product.quantity}</Text>
                  <Text>Valor Total: R$ {product.total}</Text>
                </View>
              ))}
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  };
  return generatePDF();
};

export default PDFGenerator;
