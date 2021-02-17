import React from 'react';
import './css/nav.css';
function Dropdown({ title, drop_item, active, setActive }) {
    return (
        <>
            <ul className="drop1" onMouseEnter={() => active === title ? setActive(false) : setActive(title)} onMouseLeave={() =>  setActive(false)} >
                <li className="drop">
                    {title}
                    <div className={(active === title ? "show" : "") + "drop_item"}>
                    {drop_item}
                </div>
                </li>
            </ul>
        </>
    );
}

export default Dropdown