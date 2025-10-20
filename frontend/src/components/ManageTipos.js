const ManageTipos = ({ tipos, onEdit, onDelete }) => {
  return (
    <ul className="list-group">
      {tipos.map(tipo => (
        <li key={tipo.codigo} className="list-group-item d-flex justify-content-between align-items-center">
          {tipo.nome}
          <div>
            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onEdit(tipo)}>Editar</button>
            <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(tipo.codigo)}>Excluir</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ManageTipos
