import React from 'react';
import './Button.scss'

const Button = ({getAllTextsOfSite}) => {
	return (
		<div className="center">
			<a href='/#portfolioid' className="btn">
				<svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
					<polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
					<polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
				</svg>
				<span>{ getAllTextsOfSite("promoBtn")}</span>
			</a>
		</div>
	);
};

export default Button;