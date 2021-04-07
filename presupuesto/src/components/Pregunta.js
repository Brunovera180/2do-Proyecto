import React, {Fragment, useState} from 'react';

const Pregunta = () => {

  // Definir el state.
  const [ cantidad, guardarCantidad ] = useState(0);
  const [error, guardarError] = useState(false);

  // Funcion que lee el presupuesto.
  const definirPresupuesto = e => {
      guardarCantidad(parseInt(e.target.value,10))
  }

  // Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefaul();

    // Validar
      if(cantidad > 1){
        guardarError(true);
        return;
      }


  }


  return (
    <Fragment>
        <h2> Ingresar Presupuesto</h2>

        <form
            onSubmit={agregarPresupuesto}
        >
            <input
                type='number'
                className='u-full-width'
                placeholder='Ingresar Presupuesto'
                onChange={definirPresupuesto}
            />

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
            />
        </form>
    </Fragment>
  );
}

export default Pregunta;
