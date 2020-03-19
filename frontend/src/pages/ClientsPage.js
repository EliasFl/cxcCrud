import React, { useState, useEffect } from "react";
import api from "../utils/api";

const ClientsPage = () => {
  const [users, setUsers] = useState([]);
  const [addForm, setAddForm] = useState(true);
  const [client, setClient] = useState({
    name: "",
    cedula: "",
    limit: 0,
    status: ""
  });

  useEffect(() => {
    const data = async () => {
      const result = await api.get("/clientes");
      setUsers(result.data);
    };

    data();
  }, []);

  const saveClient = e => {
    e.preventDefault();
    const data = {
      nombre: client.name,
      cedula: client.cedula,
      limiteDeCredito: client.limit,
      estado: client.status
    };
    api
      .post("/clientes", data)
      .then(response => {
        console.log("Guardado satisfactoriamente");
      })
      .catch(error => {
        console.log("Cliente con errores");
      });
  };

  const deleteClient = (e, id) => {
    e.preventDefault();
    api
      .delete(`/clientes/${id}`)
      .then(response => {
        console.log("Eliminado satisfactoriamente");
      })
      .catch(error => {
        console.log("Cliente con errores");
      });
  };

  const onChange = e => {
    e.persist();
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  return (
    <section className="section">
      {addForm ? (
        <div>
          <div className="field">
            <label className="label">Nombre</label>
            <div className="control">
              <input
                name="name"
                value={client.name}
                onChange={e => onChange(e)}
                className="input"
                type="text"
                placeholder="John Dow"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Cedula</label>
            <div className="control">
              <input
                name="cedula"
                onChange={e => onChange(e)}
                value={client.cedula}
                className="input"
                type="number"
                placeholder="4000000009"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Limite de Credito</label>
            <div className="control">
              <input
                name="limit"
                onChange={e => onChange(e)}
                value={client.limit}
                className="input"
                type="number"
                placeholder="23000"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Estado</label>
            <div className="control">
              <input
                name="status"
                value={client.status}
                onChange={e => onChange(e)}
                className="input"
                type="text"
                placeholder="Activo"
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button onClick={e => saveClient(e)} className="button is-link">
                Guardar Cliente
              </button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Cancelar</button>
            </div>
          </div>
        </div>
      ) : null}
      {users.length > 0 ? (
        <table className="table mt-2">
          <thead>
            <tr>
              <th>
                <abbr title="Position">Id</abbr>
              </th>
              <th>Descripcion</th>
              <th>Cuenta Contable</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      ) : (
        <div>No data</div>
      )}
    </section>
  );
};

export default ClientsPage;
