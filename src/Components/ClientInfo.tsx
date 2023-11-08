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
    <form>
      <h2>Dados do Cliente</h2>
      <div>
        <label>Nome:</label>
        <input
          type='text'
          value={clientData.name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label>CPF:</label>
        <input type='text' value={clientData.cpf} onChange={handleCpfChange} />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type='text'
          value={clientData.phone}
          onChange={handlePhoneChange}
        />
      </div>
      <div>
        <label>Endereço:</label>
        <input
          type='text'
          value={clientData.address}
          onChange={handleAddressChange}
        />
      </div>
    </form>
  );
};

export default ClientInfo;
