import React from 'react';

const GmailIcon = ({ size = 60, color = '#25D366' }) => {
    return (
        <img
            src="/contact/assets/images/icons/gmail2.svg"
            width={size}
            height={size}
            alt="Gmail"
            style={{ filter: color !== '#25D366' ? `hue-rotate(${color})` : 'none' }}
        />
    );
};

export default GmailIcon;