import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../store/appContext";
import { bottom } from "@popperjs/core";

const Registro = () => {
  const { actions, store } = useContext(Context);

  const { name, emailuser, password, modal, modal1, error } = store;
  const history = useHistory();

  //const { modal } = store;

  const { handleChange, register, irHome, irRegistro } = actions;

  return (
    <>
      <div className="contenedor">
        <form
          autoComplete="off"
          style={{ padding: 35 }}
          onSubmit={(e) => register(e, history)}
          method="post"
        >
          <label>Nombre del Usuario:</label>
          <input
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
          <label>Email del Usuario:</label>
          <input
            type="email"
            className="form-control"
            name="emailuser"
            value={emailuser}
            onChange={handleChange}
          />
          <>
            {!emailuser.trim() ? (
              <p className="text-danger">Por favor, inserte su email</p>
            ) : (
              ""
            )}
          </>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
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
            disabled={name && emailuser && password ? false : true}
          >
            Registrarse
          </button>
        </form>
      </div>
      <Modal estado={modal}>
        <Contenido>
          <p>Registro de usuario se ha registrado satisfactoriamente</p>
          <button
            className="btn btn-primary"
            onClick={(e) => irHome(e, history)}
          >
            Aceptar
          </button>
        </Contenido>
      </Modal>

      <Modal estado={modal1}>
        <Contenido>
          <p>Ya existe un usuario con el email insertado</p>
          <button
            className="btn btn-primary"
            onClick={(e) => irRegistro(e, history)}
          >
            Aceptar
          </button>
        </Contenido>
      </Modal>

    </>
  );
};
export default Registro;
 const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	
`; 
