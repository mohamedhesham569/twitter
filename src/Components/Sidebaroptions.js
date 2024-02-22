import React from 'react';
import "./css/Sidebaroptions.css";
import "../input.css"

function Sidebaroptions({active,Text,Icons}) {
  return (<>
  <div className={`sidebaroptions flex items-center ${active&&`active`}`}>
    <div className="p-2 ml-3">
        <Icons/>
        </div>
    
    <div className='p-2 mr-3 capitalize hidden side-text font-bold'>{Text}</div>
    </div>
    </>
  )
}

export default Sidebaroptions