import { Document, Page, Text, View, PDFViewer } from '@react-pdf/renderer';

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
};

const PDFGenerator: React.FC<PDFGeneratorProps> = ({
  companyData,
  clientData,
  productsData,
}) => {
  return (
    <PDFViewer width={500} height={500}>
      <Document>
        <Page>
          <View>
            <Text>Empresa:{companyData.name}</Text>
            <Text>Endereço:{companyData.address}</Text>
            <Text>CNPJ:{companyData.cnpj}</Text>
            <Text>Nome cliente: {clientData.name}</Text>
            <Text>CPF: {clientData.cpf}</Text>
            <Text>Telefone: {clientData.phone}</Text>
            <Text>Endereço: {clientData.address}</Text>
            {productsData.map((product, index) => (
              <View key={index}>
                <Text>Product: {product.product}</Text>
                <Text>Price: {product.price}</Text>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PDFGenerator;
