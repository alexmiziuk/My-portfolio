 import React from 'react';
import './Hamburger.scss'

const Hamburger = ({menuActive, setMenuActive}) => {
	return (
		<div>
			<div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
				<span className='right'></span>
				<span className='long'></span>
				<span className='left'></span>
			</div>
		</div>
	);
};

export default Hamburger; 