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

  /* const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...companyData, logo: e.target.value };
    setCompanyData(newData);
    onCompanyDataChange(newData);
  };*/

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
    <form className='w-5/12 mx-6 p-6 bg-white rounded-md shadow-md'>
      <h2 className='text-2xl font-semibold mb-4'>Dados da Empresa</h2>
      {/* <div>
        <label>Logo:</label>
        <input
          type='file'
          value={companyData.logo}
          onChange={handleLogoChange}
        />
      </div> */}
      <div className='mb-4'>
        <label className='block text-gray-600 mb-2'>Nome:</label>
        <input
          type='text'
          className='border w-full py-2 px-3'
          value={companyData.name}
          onChange={handleNameChange}
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-600 mb-2'>Endereço:</label>
        <input
          type='text'
          className='border w-full py-2 px-3'
          value={companyData.address}
          onChange={handleAddressChange}
        />
      </div>
      <div>
        <label className='block text-gray-600 mb-2'>CNPJ:</label>
        <input
          type='text'
          className='border w-full py-2 px-3'
          value={companyData.cnpj}
          onChange={handleCnpjChange}
        />
      </div>
    </form>
  );
};

export default CompanyInfo;
