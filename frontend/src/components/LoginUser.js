import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



 const LoginUser = () => {
  const { actions, store } = useContext(Context);

  const { name, password} = store;
  const history = useHistory();

  //const { modal } = store;

  const { handleChange, handleLogin } = actions;

  return (
    <>
      <div className="contenedor">
        <form
          autoComplete="off"
          style={{ padding: 85 }}
          onSubmit={(e) => handleLogin(e, history)}
          method="post"
        >
          <label>Nombre del Usuario:</label>
          <input
            style={{ width: 300 }}
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <>
            {!name.trim() ? (
              <p className="text-danger">Por favor, inserte su nombre</p>
            ) : (
              ""
            )}
          </>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              style={{ width: 300 }}
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <>
              {!password.trim() ? (
                <p className="text-danger">Por favor, inserte su contraseña</p>
              ) : (
                ""
              )}
            </>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={name && password ? false : true}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};
export default LoginUser;
 


