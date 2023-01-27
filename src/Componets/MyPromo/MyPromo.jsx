import React from 'react';
import Button from '../Button/Button';
import './MyPromo.scss'






const MyPromo = () => {
	return (
		<section className="mypromo" id='mypromoid'>
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