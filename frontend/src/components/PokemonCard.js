const PokemonCard = ({ pokemon, onDelete, onEdit }) => {
  const typeColors = {
    'grass': 'success',
    'poison': 'secondary',
    'fire': 'danger',
    'water': 'primary',
    'bug': 'info',
    'normal': 'secondary',
    'flying': 'warning',
    'fighting': 'dark',
    'psychic': 'info',
    'rock': 'secondary',
    'ground': 'warning',
    'ice': 'primary',
    'ghost': 'dark',
    'dragon': 'primary',
    'dark': 'dark',
    'steel': 'secondary',
    'fairy': 'info',
    'electric': 'warning'
  }

  const availableColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark']

  const getColorForType = (typeName) => {
    if (!typeName) {
      return 'light'
    }
    
    if (typeColors[typeName]) {
      return typeColors[typeName]
    }
    
    let hash = 0
    for (let i = 0; i < typeName.length; i++) {
      hash = typeName.charCodeAt(i) + ((hash << 5) - hash)
    }
    const index = Math.abs(hash % availableColors.length)
    return availableColors[index]
  }

  const getBadgeClass = (typeName) => `badge bg-${getColorForType(typeName) || 'light'}`

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize">{pokemon.nome}</h5>
        <p className="card-subtitle mb-2 text-muted">#{String(pokemon.codigo).padStart(3, '0')}</p>
        
        <div>
          {pokemon.tipo_primario && 
            <span className={getBadgeClass(pokemon.tipo_primario)} style={{marginRight: '5px'}}>
              {pokemon.tipo_primario}
            </span>
          }
          {pokemon.tipo_secundario && 
            <span className={getBadgeClass(pokemon.tipo_secundario)}>
              {pokemon.tipo_secundario}
            </span>
          }
        </div>

        <div className="mt-auto pt-3">
          <button onClick={() => onEdit(pokemon.codigo)} className="btn btn-sm btn-outline-primary me-2">Editar</button>
          <button onClick={() => onDelete(pokemon.codigo)} className="btn btn-sm btn-outline-danger">Excluir</button>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
