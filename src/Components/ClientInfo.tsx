import React, { useState } from 'react';

const ClientInfo = ({
  onClientDataChange,
}: {
  onClientDataChange: (data: any) => void;
}) => {
  const [clientData, setClientData] = useState({
    name: '',
    phone: '',
    address: '',
    cpf: '',
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...clientData, name: e.target.value };
    setClientData(newData);
    onClientDataChange(newData);
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...clientData, cpf: e.target.value };
    setClientData(newData);
    onClientDataChange(newData);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...clientData, phone: e.target.value };
    setClientData(newData);
    onClientDataChange(newData);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...clientData, address: e.target.value };
    setClientData(newData);
    onClientDataChange(newData);
  };

  return (
    <form className='max-w-md p-6 bg-white rounded-md shadow-md flex flex-wrap'>
      <h2 className='text-2xl font-semibold mb-4 w-full'>Dados do Cliente</h2>

      <div className='w-full pr-2 mb-4'>
        <label className='block text-gray-600 mb-2'>Nome:</label>
        <input
          type='text'
          className='border w-full py-2 px-3'
          value={clientData.name}
          onChange={handleNameChange}
        />
      </div>

      <div className='w-1/2 pr-2 mb-4'>
        <label className='block text-gray-600 mb-2'>CPF:</label>
        <input
          type='text'
          className='border w-full py-2 px-3'
          value={clientData.cpf}
          onChange={handleCpfChange}
        />
      </div>

      <div className='w-1/2 pr-2 mb-4'>
        <label className='block text-gray-600 mb-2'>Telefone:</label>
        <input
          type='text'
          className='border w-full py-2 px-3'
          value={clientData.phone}
          onChange={handlePhoneChange}
        />
      </div>

      <div className='w-full mb-4'>
        <label className='block text-gray-600 mb-2'>Endereço:</label>
        <input
          type='text'
          className='border w-full py-2 px-3'
          value={clientData.address}
          onChange={handleAddressChange}
        />
      </div>
    </form>
  );
};

export default ClientInfo;
