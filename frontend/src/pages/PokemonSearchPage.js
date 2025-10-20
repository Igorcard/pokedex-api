
import { useState, useEffect, useCallback } from 'react'
import { getPokemons, getTipos, deletePokemon, createPokemon, updatePokemon, createTipo, updateTipo, deleteTipo } from '../services/pokemonService'
import PokemonCard from '../components/PokemonCard'
import Pagination from '../components/Pagination'
import SearchBar from '../components/SearchBar'
import PokemonForm from '../components/PokemonForm'
import TipoForm from '../components/TipoForm'
import ManageTipos from '../components/ManageTipos'
import '../components/Drawer.css'
import './styles/PokemonSearchPage.css'

const PokemonSearchPage = () => {
  const [pokemons, setPokemons] = useState([])
  const [tipos, setTipos] = useState([])
  const [filters, setFilters] = useState({ nome: '', tipo: '' })
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [error, setError] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingPokemon, setEditingPokemon] = useState(null)
  const [isTipoFormOpen, setIsTipoFormOpen] = useState(false)
  const [editingTipo, setEditingTipo] = useState(null)
  const [isManageTiposOpen, setIsManageTiposOpen] = useState(false)

  const fetchPokemons = useCallback(async () => {
    try {
      const params = { ...filters, page: currentPage, limit: 12 }
      const response = await getPokemons(params)
      setPokemons(response.data.pokemons || [])
      setTotalPages(response.data.pagination.totalPages || 0)
      setError(null)
    } catch (err) {
      setError('Falha ao buscar Pokémon. Verifique se o back-end está rodando.')
      console.error(err)
    }
  }, [filters, currentPage])

  const fetchTipos = async () => {
    try {
      const response = await getTipos()
      setTipos(response.data.tipos || [])
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
        err.message || 
        'Falha ao buscar tipos.'
    
      alert(errorMessage)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  useEffect(() => {
    fetchTipos()
  }, [])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este Pokémon?')) {
      try {
        await deletePokemon(id)

        fetchPokemons()
      } catch (err) {
        const errorMessage = err.response?.data?.message || 
        err.message || 
        'Falha ao excluir pokemon.'
    
        alert(errorMessage)
      }
    }
  }

  const handleEdit = (id) => {
    const pokemonToEdit = pokemons.find(p => p.codigo === id)
    setEditingPokemon(pokemonToEdit)
    setIsFormOpen(true)
  }

  const handleAdd = () => {
    setEditingPokemon(null)
    setIsFormOpen(true)
  }

  const handleSave = async (pokemonData) => {
    try {
      if (editingPokemon) {
        await updatePokemon(editingPokemon.codigo, pokemonData)
      } else {
        await createPokemon(pokemonData)
      }
      setIsFormOpen(false)
      fetchPokemons()
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
        err.message || 
        'Falha ao salvar pokemon.'
    
      alert(errorMessage)
    }
  }

  const handleCancel = () => {
    setIsFormOpen(false)
  }

  const handleAddTipo = () => {
    setEditingTipo(null)
    setIsTipoFormOpen(true)
  }

  const handleEditTipo = (tipo) => {
    setEditingTipo(tipo)
    setIsTipoFormOpen(true)
  }

  const handleDeleteTipo = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este tipo?')) {
      try {
        await deleteTipo(id)
        fetchTipos()
      } catch (err) {
        const errorMessage = err.response?.data?.message || 
          err.message || 
          'Não foi possível excluir o tipo.'
      
        alert(errorMessage)
      }
    }
  }

  const handleSaveTipo = async (tipoData) => {
    try {
      if (editingTipo) {
        await updateTipo(editingTipo.codigo, tipoData)
      } else {
        await createTipo(tipoData)
      }
      setIsTipoFormOpen(false)
      fetchTipos()
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
        err.message || 
        'Falha ao salvar tipo.'
    
      alert(errorMessage)
    }
  }

  const handleCancelTipoForm = () => {
    setIsTipoFormOpen(false)
  }

  const handleOpenManageTipos = () => {
    setIsManageTiposOpen(true)
  }

  const handleCloseManageTipos = () => {
    setIsManageTiposOpen(false)
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Pokédex</h1>
      <SearchBar tipos={tipos} onFilterChange={handleFilterChange} />
      <div className="mb-4">
        <button className="btn btn-primary me-2" onClick={handleAdd}>Adicionar Pokémon</button>
        <button className="btn btn-info" onClick={handleOpenManageTipos}>Gerenciar Tipos</button>
      </div>

      {isFormOpen && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editingPokemon ? 'Editar Pokémon' : 'Adicionar Pokémon'}</h5>
                <button type="button" className="btn-close" onClick={handleCancel}></button>
              </div>
              <div className="modal-body">
                <PokemonForm pokemon={editingPokemon} tipos={tipos} onSave={handleSave} onCancel={handleCancel} />
              </div>
            </div>
          </div>
        </div>
      )}

      {isManageTiposOpen && (
        <>
            <div className="drawer-backdrop" onClick={handleCloseManageTipos}></div>
            <div className="drawer open">
                <div className="drawer-header">
                    <h5 className="modal-title">Gerenciar Tipos</h5>
                    <button type="button" className="btn-close" onClick={handleCloseManageTipos}></button>
                </div>
                <div className="drawer-body">
                    <ManageTipos tipos={tipos} onEdit={handleEditTipo} onDelete={handleDeleteTipo} />
                </div>
                <div className="drawer-footer">
                    <button className="btn btn-primary" onClick={handleAddTipo}>Adicionar Tipo</button>
                </div>
            </div>
        </>
      )}

      {isTipoFormOpen && (
        <div className="modal show d-block form-type" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editingTipo ? 'Editar Tipo' : 'Adicionar Tipo'}</h5>
                <button type="button" className="btn-close" onClick={handleCancelTipoForm}></button>
              </div>
              <div className="modal-body">
                <TipoForm tipo={editingTipo} onSave={handleSaveTipo} onCancel={handleCancelTipoForm} />
              </div>
            </div>
          </div>
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={pokemon.codigo}>
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
  )
}

export default PokemonSearchPage
