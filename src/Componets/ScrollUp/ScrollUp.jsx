import React from 'react';
import './ScrollUp.scss';

import { useEffect, useState } from 'react';

import SkrollUp from '../../Icons/arrow_up/keyboard_double_arrow_up_white_24dp.svg'

const ScrollUp = () => {
	const [arrowSkrollUp, setArrowSkrollUp] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 760) {
				setArrowSkrollUp(true)
			} else {
				setArrowSkrollUp(false)	
	}
})
	}, [])
	const scrollUp = () => (
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	)
	return (
		<div>
			{arrowSkrollUp && (
				<button onClick={scrollUp} className='pageup'>
				<img src={SkrollUp} alt="arrow_up" />
			</button>
			)}  
		</div>
	);
};

export default ScrollUp;