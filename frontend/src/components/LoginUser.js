import React, { useContext } from "react";

import { Context } from "../store/appContext";

function LoginUser() {
  const { store, actions } = useContext(Context);

  const { handleChange, handleLogin } = actions;

  const { nombre, password, error } = store;

  return (
    <>
      {/* small modal */}
      <div
        className="modal fade bs-example-modal-sm"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="mySmallModalLabel"
      >
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fa fa-close" />
                </span>
              </button>
              <h4 className="modal-title mt-5" id="mySmallModalLabel">
                Sign In
              </h4>
              {!!store.error && (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Error:</strong> {store.error}.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              )}
              <form
                className="sm-frm"
                onSubmit={handleLogin}
                style={{ padding: 30 }}
                method="post"
              >
                <label>Name :</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="username"
                  value={nombre}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <label>Password :</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  value={password}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <button className="btn btn-default" type="submit">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginUser;
