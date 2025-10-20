import { useState, useEffect } from 'react'

const PokemonForm = ({ pokemon, tipos, onSave, onCancel }) => {
  const [formState, setFormState] = useState({
    nome: '',
    tipo_primario: '',
    tipo_secundario: ''
  })

  useEffect(() => {
    if (pokemon) {
      setFormState({
        nome: pokemon.nome || '',
        tipo_primario: pokemon.tipo_primario ? pokemon.tipo_primario.codigo : '',
        tipo_secundario: pokemon.tipo_secundario ? pokemon.tipo_secundario.codigo : ''
      })
    }
  }, [pokemon])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">Nome</label>
        <input type="text" className="form-control" id="nome" name="nome" value={formState.nome} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="tipo_primario" className="form-label">Tipo Primário</label>
        <select className="form-select" id="tipo_primario" name="tipo_primario" value={formState.tipo_primario} onChange={handleChange} required>
          <option value="">Selecione um tipo</option>
          {tipos.map(tipo => (
            <option key={tipo.codigo} value={tipo.codigo}>{tipo.nome}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="tipo_secundario" className="form-label">Tipo Secundário</label>
        <select className="form-select" id="tipo_secundario" name="tipo_secundario" value={formState.tipo_secundario} onChange={handleChange}>
          <option value="">Nenhum</option>
          {tipos.map(tipo => (
            <option key={tipo.codigo} value={tipo.codigo}>{tipo.nome}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary me-2">Salvar</button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
    </form>
  )
}

export default PokemonForm
