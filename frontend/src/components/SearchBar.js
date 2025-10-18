
import React, { useState } from 'react';

const SearchBar = ({ tipos, onFilterChange }) => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onFilterChange({ nome, tipo });
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <div className="row g-3 align-items-end">
        <div className="col-md-5">
          <label htmlFor="nomeFilter" className="form-label">Nome do Pokémon</label>
          <input 
            type="text" 
            className="form-control" 
            id="nomeFilter"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: Pikachu"
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="tipoFilter" className="form-label">Tipo</label>
          <select 
            className="form-select" 
            id="tipoFilter"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="">Todos os Tipos</option>
            {tipos.map((t) => (
              <option key={t._id} value={t.codigo}>{t.nome}</option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">Buscar</button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
