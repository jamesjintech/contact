import React from 'react';

const WhatsappIcon = ({ size = 60, color = '#25D366' }) => {
    return (
        <img
            src="contact/assets/images/icons/whatsapp1.svg"
            width={size}
            height={size}
            alt="WhatsApp"
            style={{ filter: color !== '#25D366' ? `hue-rotate(${color})` : 'none' }}
        />
    );
};

export default WhatsappIcon;