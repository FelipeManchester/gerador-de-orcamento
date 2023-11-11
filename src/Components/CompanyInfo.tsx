import React, { useState } from 'react';

const CompanyInfo = ({
  onCompanyDataChange,
}: {
  onCompanyDataChange: (data: any) => void;
}) => {
  const [companyData, setCompanyData] = useState({
    logo: '',
    name: '',
    address: '',
    cnpj: '',
  });

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...companyData, logo: e.target.value };
    setCompanyData(newData);
    onCompanyDataChange(newData);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...companyData, name: e.target.value };
    setCompanyData(newData);
    onCompanyDataChange(newData);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...companyData, address: e.target.value };
    setCompanyData(newData);
    onCompanyDataChange(newData);
  };

  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...companyData, cnpj: e.target.value };
    setCompanyData(newData);
    onCompanyDataChange(newData);
  };

  return (
    <form>
      <h2>Dados da Empresa</h2>
      {/* <div>
        <label>Logo:</label>
        <input
          type='file'
          value={companyData.logo}
          onChange={handleLogoChange}
        />
      </div> */}
      <div>
        <label>Nome:</label>
        <input
          type='text'
          value={companyData.name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label>Endereço:</label>
        <input
          type='text'
          value={companyData.address}
          onChange={handleAddressChange}
        />
      </div>
      <div>
        <label>CNPJ:</label>
        <input
          type='text'
          value={companyData.cnpj}
          onChange={handleCnpjChange}
        />
      </div>
    </form>
  );
};

export default CompanyInfo;
