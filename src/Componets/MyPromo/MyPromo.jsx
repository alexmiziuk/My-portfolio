import React from 'react';
import './MyPromo.scss'
import Button from '../Button/Button';
/* import '../Button/Button.scss' */
/* import Hamburger from '../Hamburger/Hamburger'; */




const MyPromo = () => {
	return (
		<section className="mypromo">
			{/* <Hamburger /> */}
			<div className="container">
				<div className="title title-fz16 mypromo__subtitle">
					Мене звати Олександр Мізюк
				</div>
				<h1 className=" title title-fz48 mypromo__title" >
					Я web-розробник зі Львова
				</h1>
				<div className="mypromo__btns">
					<Button />
					<a href='/#aboutid' className="mypromo__link">Про мене</a>
				</div>
			</div>
		</section>
	);
};

export default MyPromo;