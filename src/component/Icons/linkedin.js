import React from 'react';

const LinkedinIcon = ({ size = 60, color = '#25D366' }) => {
    return (
        <img
            src="/assets/images/icons/linkedin.svg"
            width={size}
            height={size}
            alt="Linkedin"
            style={{ filter: color !== '#25D366' ? `hue-rotate(${color})` : 'none' }}
        />
    );
};

export default LinkedinIcon;