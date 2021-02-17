import React from 'react';
function Accordion2({title ,Accordion_item, active , setActive}) {
return(
    <>
      <div className="accordion" >
        <div className="accordionHeading" onClick={() => active === title ? setActive(false) : setActive(title)}> 
          <h2>{title}</h2>
        </div>
          <div className={(active === title ? "show" : "") + " accordionContent"}> 
           {Accordion_item}
          </div>
      </div>
    </>
);
}

export default Accordion2

