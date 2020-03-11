//nos sirve para ir iterando cada uno de los gastos
import React from 'react';
import Gasto from './Gasto'


function Listado({gastos}) {
    return(
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {gastos.map(gasto => (
                   <Gasto
                   key={gasto}
                    gasto={gasto}
                   />
                ))}
            </div>    )
}
export default Listado;