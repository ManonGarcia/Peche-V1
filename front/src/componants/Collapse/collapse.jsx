import React, { useState } from "react";

function Collapse(props) {
    const [dropdownVisible, setDropdownVisible] = useState(true);
    const viewContent = () => {
        setDropdownVisible(!dropdownVisible);
    };
    const dropdown = dropdownVisible ? "apartment_utils_text open" : "apartment_utils_text close";
    const chevron = dropdownVisible ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down";
    
    return (
        <div className="regulation">
            <div className="regulation_title" onClick={viewContent}>
                <h4>{props.title}</h4>
                <i className={chevron}></i>
            </div>

            <p className={dropdown}>{props.content}</p>
        </div>
    )
};

export default Collapse;