
import React from 'react';

const PokemonCard = ({ pokemon, onDelete, onEdit }) => {
  // A simple mapping from type ID to a color scheme for the badge
  const typeColors = {
    1: 'success',   // Grass
    2: 'secondary', // Poison
    3: 'danger',    // Fire
    4: 'primary',   // Water
    5: 'info',      // Bug
    6: 'light',     // Normal
    7: 'warning',   // Flying
    8: 'dark',      // Fighting
    9: 'info',      // Psychic
    10: 'secondary',// Rock
    11: 'warning',  // Ground
    12: 'primary',  // Ice
    13: 'dark',     // Ghost
    14: 'primary',  // Dragon
    15: 'dark',     // Dark
    16: 'light',    // Steel
    17: 'info',     // Fairy
    18: 'warning',  // Electric
  };

  const getBadgeClass = (typeId) => `badge bg-${typeColors[typeId] || 'light'}`;

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize">{pokemon.nome}</h5>
        <p className="card-subtitle mb-2 text-muted">#{String(pokemon.codigo).padStart(3, '0')}</p>
        
        <div>
          {pokemon.tipo_primario_nome && 
            <span className={getBadgeClass(pokemon.tipo_primario)} style={{marginRight: '5px'}}>
              {pokemon.tipo_primario_nome}
            </span>
          }
          {pokemon.tipo_secundario_nome && 
            <span className={getBadgeClass(pokemon.tipo_secundario)}>
              {pokemon.tipo_secundario_nome}
            </span>
          }
        </div>

        <div className="mt-auto pt-3">
          <button onClick={() => onEdit(pokemon._id)} className="btn btn-sm btn-outline-primary me-2">Editar</button>
          <button onClick={() => onDelete(pokemon._id)} className="btn btn-sm btn-outline-danger">Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
