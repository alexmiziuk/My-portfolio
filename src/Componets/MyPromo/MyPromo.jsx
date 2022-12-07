import React from 'react';
import './MyPromo.scss'
import Button from '../Button/Button';
/* import '../Button/Button.scss' */
import Hamburger from '../Hamburger/Hamburger';




const MyPromo = () => {
	return (
		<section className="myPromo">
			{/* <Hamburger /> */}
			<div className="container">
				<div className="title title_white title_fz16 myPromo__subtitle">
					Мене звати Олександр Мізюк
				</div>
				<h1 className="title title_white title_fz48 myPromo__title" >
					Я web-розробник зі Львова
				</h1>
				<div className="myPromo__btns">
					<Button />
					<a href="#" className="myPromo__link">Про мене</a>
				</div>
			</div>
		</section>
	);
};

export default MyPromo;