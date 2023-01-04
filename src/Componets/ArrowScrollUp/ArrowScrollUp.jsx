import { useEffect, useState } from "react";
import './ArrowScrollUp.scss'
import SkrollUp from '../../Icons/arrow_up/keyboard_double_arrow_up_white_24dp.svg';

export const ArrowScrollUp = () => {
	const [isVisable, setIsVisible] = useState(false)

	const toggleVisiblity = () => {
		if (window.pageYOffset > 760) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	};
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	
	useEffect(() => {
		window.addEventListener('scroll', toggleVisiblity);

		return () => {
			window.removeEventListener('scroll', toggleVisiblity)
		}
	}, []);

	return (
		<div className="fixed">
			<button type="button" onClick={scrollToTop} className={isVisable ? 'pageup' : 'pageup hidden'}><img src={SkrollUp} alt="arrow_up" /></button>
		</div>
	)
	
};

