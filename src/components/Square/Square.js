import React, { } from 'react' 
import './Square.scss';
import Cross from '../Cross/Cross';
import Circle from '../Circle/Circle';

   // le doy acceso a la funcion de padre takeTurn
    const Square = ({ position,  value, takeTurn }) => {
       //con esto cambio el estado en TictacToe Components
       function handleClick(){
            if( value == 'EMPTY' )takeTurn(position)
        }

        return (
            <div className="square" onClick={handleClick} > 
              {value === 'CIRCLE' && <Circle />}
              {value === 'CROSS' && <Cross />}
            </div>
        )
    }
    


export default Square