import React from 'react';

import './custom-button.styles.scss';


const CustomButton = ({ children, ...defaultotherProps }) => (
    <button className="custom-button">
        {children}
    </button>
 
);

export default CustomButton;