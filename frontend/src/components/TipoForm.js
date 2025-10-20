import { useState, useEffect } from 'react'

const TipoForm = ({ tipo, onSave, onCancel }) => {
  const [nome, setNome] = useState('')

  useEffect(() => {
    if (tipo) {
      setNome(tipo.nome || '')
    }
  }, [tipo])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ ...tipo, nome })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">Nome do Tipo</label>
        <input type="text" className="form-control" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary me-2">Salvar</button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
    </form>
  )
}

export default TipoForm
