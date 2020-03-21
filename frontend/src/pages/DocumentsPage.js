import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Swal from "sweetalert2";

const DocumentsPage = ({}) => {
  const [documents, setDocuments] = useState([]);
  const [addForm, setAddForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [document, setDocument] = useState({
    descripcion: "",
    cuentaContable: null,
    status: "R"
  });

  useEffect(() => {
    const data = async () => {
      const result = await api.get("/tiposDocumentos");
      setDocuments(result.data);
    };

    data();
  }, []);

  const onChange = e => {
    e.persist();
    setDocument({ ...document, [e.target.name]: e.target.value });
  };

  const saveDocument = e => {
    e.preventDefault();
    const data = {
      descripcion: document.descripcion,
      cuentaContable: document.cuentaContable,
      estado: document.status
    };
    api
      .post("/tiposDocumentos", data)
      .then(response => {
        Swal.fire({
          title: "Guardado satisfactoriamente",
          icon: "success"
        });
      })
      .catch(error => {
        Swal.fire({
          title: "Error",
          icon: "error"
        });
      });
  };

  const editDocument = e => {
    e.preventDefault();
    const data = {
      id: document.id,
      descripcion: document.descripcion,
      cuentaContable: document.cuentaContable,
      estado: document.status
    };

    api
      .put(`tiposDocumentos/${data.id}`, data)
      .then(() => {
        Swal.fire({
          title: "Editado satisfactoriamente",
          icon: "success"
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error",
          icon: "error"
        });
      });
  };

  const deleteDocument = (e, id) => {
    e.preventDefault();
    api
      .delete(`/tiposDocumentos/${id}`)
      .then(response => {
        Swal.fire({
          title: "Eliminado satisfactoriamente",
          icon: "success"
        });
      })
      .catch(error => {
        Swal.fire({
          title: "Error papalote",
          icon: "error"
        });
      });
  };

  return (
    <section className="section">
      {addForm ? (
        <form className="form">
          <div className="field">
            <label className="label">Nombre de Documento</label>
            <div className="control">
              <input
                name="descripcion"
                value={document.descripcion}
                onChange={e => onChange(e)}
                className="input"
                type="text"
                placeholder="Documento nombre"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Cuenta contable</label>
            <div className="control">
              <input
                name="cuentaContable"
                value={document.cuentaContable}
                onChange={e => onChange(e)}
                className="input"
                type="number"
                placeholder="233"
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              {edit ? (
                <button
                  onClick={e => {
                    setEdit(false);
                    editDocument(e);
                    setAddForm(addForm => !addForm);
                  }}
                  className="button is-link is-warning"
                >
                  Editar Documento
                </button>
              ) : (
                <button
                  onClick={e => saveDocument(e)}
                  className="button is-link"
                >
                  Guardar Documento
                </button>
              )}
            </div>
            <div className="control">
              <button
                onClick={() => {
                  setEdit(false);
                  setAddForm(addForm => !addForm);
                }}
                className="button is-link is-light"
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      ) : (
        <a href="#" onClick={() => setAddForm(addForm => !addForm)}>
          Agregar un nuevo Documento
        </a>
      )}
      {documents.length > 0 ? (
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>
                <abbr title="Position">Id</abbr>
              </th>
              <th>Descripcion</th>
              <th>Cuenta contable</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {documents.map(document => (
              <tr key={document.id}>
                <td>{document.id}</td>
                <td>{document.descripcion}</td>
                <td>{document.cuentaContable}</td>
                <td>
                  <p className="buttons">
                    <button
                      onClick={() => {
                        setEdit(true);
                        setDocument(document);
                        setAddForm(addForm => !addForm);
                      }}
                      class="button is-warning"
                    >
                      <span class="icon is-small">
                        <i class="fas fa-pen"></i>
                      </span>
                    </button>
                    <button
                      onClick={e => deleteDocument(e, document.id)}
                      class="button is-danger"
                    >
                      <span class="icon is-small">
                        <i class="fas fa-trash-alt"></i>
                      </span>
                    </button>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No data</div>
      )}
    </section>
  );
};

export default DocumentsPage;
