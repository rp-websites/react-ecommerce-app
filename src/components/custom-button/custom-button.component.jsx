import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({isGoogleButton, children, ...otherProps}) => {
	return (
		<button className={`${isGoogleButton ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;