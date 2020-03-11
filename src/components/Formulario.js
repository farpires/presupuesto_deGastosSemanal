import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

function Formulario(props) {
  const { guardarGasto, guardarCrearGasto } = props;

  //state
  const [nombreGasto, guardarNombreGasto] = useState("");
  const [cantidadGastos, guardarCantidadGastos] = useState(0);
  const [error, guardarError] = useState(false);

  //cuando se agrega el gasto
  const agregarGastos = e => {
    e.preventDefault();

    //validar
    if (cantidadGastos < 1 || isNaN(cantidadGastos) || nombreGasto === "") {
      guardarError(true);
      return;
    }

    //construir object de gastos
    const gasto = {
      nombreGasto,
      cantidadGastos,
      id: shortid.generate()
    };
    //pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    //eliminar alerta
    guardarError(false);

    //resetear el form
    guardarNombreGasto("");
    guardarCantidadGastos("");
  }
  return (
    <form onSubmit={agregarGastos}>
      <h2>Agregar tus gastos Aqui</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={e => guardarNombreGasto(e.target.value)}
          value={nombreGasto}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange={e => guardarCantidadGastos(parseInt(e.target.value, 10))}
          value={cantidadGastos}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
}
export default Formulario;
