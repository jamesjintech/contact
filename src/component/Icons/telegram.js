import React from 'react';

const TelegramIcon = ({ size = 60, color = '#25D366' }) => {
    return (
        <img
            src="/contact/assets/images/icons/tele2.svg"
            width={size}
            height={size}
            alt="Telegram"
            style={{ filter: color !== '#25D366' ? `hue-rotate(${color})` : 'none' }}
        />
    );
};

export default TelegramIcon;