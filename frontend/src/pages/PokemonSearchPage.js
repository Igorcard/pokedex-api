
import React, { useState, useEffect, useCallback } from 'react';
import { getPokemons, getTipos, deletePokemon } from '../services/pokemonService';
import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const PokemonSearchPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [filters, setFilters] = useState({ nome: '', tipo: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  const fetchPokemons = useCallback(async () => {
    try {
      const params = { ...filters, page: currentPage, limit: 12 };
      const response = await getPokemons(params);
      setPokemons(response.data.pokemons || []);
      setTotalPages(response.data.pagination.totalPages || 0);
      setError(null);
    } catch (err) {
      setError('Falha ao buscar Pokémon. Verifique se o back-end está rodando.');
      console.error(err);
    }
  }, [filters, currentPage]);

  const fetchTipos = async () => {
    try {
      const response = await getTipos();
      setTipos(response.data || []);
    } catch (err) {
      console.error('Falha ao buscar tipos:', err);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  useEffect(() => {
    fetchTipos();
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page on new filter
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este Pokémon?')) {
      try {
        await deletePokemon(id);
        // Refresh the list after deletion
        fetchPokemons();
      } catch (err) {
        console.error('Falha ao excluir Pokémon:', err);
        alert('Não foi possível excluir o Pokémon.');
      }
    }
  };

  const handleEdit = (id) => {
    // Placeholder for edit functionality
    console.log(`Edit Pokémon with id: ${id}`);
    alert(`Funcionalidade de edição para o Pokémon ${id} ainda não implementada.`);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Pokédex</h1>
      <SearchBar tipos={tipos} onFilterChange={handleFilterChange} />

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={pokemon._id}>
              <PokemonCard 
                pokemon={pokemon} 
                onDelete={handleDelete} 
                onEdit={handleEdit} 
              />
            </div>
          ))
        ) : (
          !error && <p className="text-center">Nenhum Pokémon encontrado.</p>
        )}
      </div>

      {pokemons.length > 0 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      )}
    </div>
  );
};

export default PokemonSearchPage;
