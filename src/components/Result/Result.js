import React, { } from 'react' 
import './Result.scss';
   
    //Parametro entren {}
    const Result = ( {winner} ) => {
        //console.log(winner);
        return (
          <div className="result">
              { winner === 'CIRCLE' &&  'o - Circle won the game! - o'}
              { winner === 'CROSS' &&  'x - Cross won the game! - x'}
              { winner === 'TIE' &&  '= It is a tie! :| ='}
              <button onClick={reset}>Reset</button>
          </div>
        )
    }
    


export default Result