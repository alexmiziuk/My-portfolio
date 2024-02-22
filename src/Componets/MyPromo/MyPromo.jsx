import React from 'react';
import Button from '../Button/Button';
import './MyPromo.scss'

const MyPromo = ({getAllTextsOfSite}) => {
	return (
		<section className="mypromo" id='mypromoid'>
			<div className="container">
				<div className="title title-fz16 mypromo__subtitle">
					{getAllTextsOfSite("promoSubTitle")}
				</div>
				<h1 className=" title title-fz48 mypromo__title" >
				{getAllTextsOfSite("promoTitle")}
				</h1>
				<div className="mypromo__btns">
					<Button getAllTextsOfSite={getAllTextsOfSite } />
					<a href='/#aboutid' className="mypromo__link">{getAllTextsOfSite("promoLink")}</a>
				</div>
			</div>
		</section>
	);
};

export default MyPromo;