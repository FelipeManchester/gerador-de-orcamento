import {
  Document,
  Page,
  Text,
  View,
  PDFViewer,
  Image,
  StyleSheet,
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 10,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
  logo: {
    width: 500,
    height: 300,
    marginLeft: 10,
  },
  section: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 10,
  },
  productSection: {
    flexDirection: 'column',
    marginTop: 10,
  },
  productHeader: {
    flexDirection: 'row',
    backgroundColor: '#BFBFBF',
    padding: 5,
  },
  productHeaderText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
  },
  productItem: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#EFEFEF',
  },
  productItemText: {
    fontSize: 10,
    marginRight: 10,
  },
});

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
            <View style={styles.container}>
              <View style={styles.header}>
                <Image style={styles.logo} src={logo} />
                <Text style={styles.headerText}>{companyData.name}</Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionContent}>{companyData.address}</Text>
                <Text style={styles.sectionContent}>{companyData.cnpj}</Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}></Text>
                <Text style={styles.sectionContent}>{clientData.name}</Text>
                <Text style={styles.sectionContent}>{clientData.cpf}</Text>
                <Text style={styles.sectionContent}>{clientData.phone}</Text>
                <Text style={styles.sectionContent}>{clientData.address}</Text>
              </View>
              <View style={styles.productSection}>
                <View style={styles.productHeader}>
                  <Text style={styles.productHeaderText}>Produto</Text>
                  <Text style={styles.productHeaderText}>Preço</Text>
                  <Text style={styles.productHeaderText}>Quantidade</Text>
                  <Text style={styles.productHeaderText}>Valor Total</Text>
                </View>
                {productsData.map((product, index) => (
                  <View key={index} style={styles.productItem}>
                    <Text style={styles.productItemText}>
                      {product.product}
                    </Text>
                    <Text style={styles.productItemText}>
                      R$ {product.price}
                    </Text>
                    <Text style={styles.productItemText}>
                      {product.quantity}
                    </Text>
                    <Text style={styles.productItemText}>
                      R$ {product.total}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  };
  return generatePDF();
};

export default PDFGenerator;
