import React from 'react';
import './Portfolio.scss';
import '../Animate/Animate.css';
import coffeeShop from '../../Image/works/pleasure-bg.png';
import CarWash from '../../Image/works/isckraCarWash.jpg';
import buetifulSlovenia from '../../Image/works/buetiful-slovenia.jpg';
import ElectroBoiler from '../../Image/works/electricBoiler.jpg';
import businessSchool from '../../Image/works/promo-img-second.jpg';

const Portfolio = ({ getAllTextsOfSite }) => {
	
	return (
		<section className="portfolio" >
			<div className="container">
				<h2 className="title title-fz16 portfolio__title" id='portfolioid'>
					{getAllTextsOfSite ("portfolioSubTitle")}
				</h2>
				<div className="title title-fz48 portfolio__subtitle" >
				{getAllTextsOfSite ("potfolioTitle")}
				</div>
				<div className="divider">
					<span></span>
				</div>
				<div className="portfolio__wrapper">
					<div className='portfolio__efect' id='first'>
						<a href="https://coffee-shop-4eca7.web.app/" className="portfolio__item">
							<img src={coffeeShop}
								alt={"Business"} />
						</a>
					</div>
					<div className='portfolio__efect' id='second'>
						<a href="https://glittery-cupcake-bc2d76.netlify.app/" className="portfolio__item">
							<img src={businessSchool} className='img-three'
								alt={"Business School"} />
						</a>
					</div>
					<div className='portfolio__efect' id='three'>
						<a href="https://alexmiziuk.github.io/Electro-Boilers/" className="portfolio__item">
							<img src={ElectroBoiler}
								alt={"Electro Boiler"} />
						</a>
					</div>
					<div className='portfolio__efect' id='fourth'>
						<a href="https://beautiful-slovenia-one.web.app/" className="portfolio__item ">
							<img className='vertical'src={buetifulSlovenia}
								alt={"Beautiful Slovenia"} />
						</a>
					</div>
					<div className='portfolio__efect' id='fifth'>
						<a href="https://65154654692f1e7516f78496--sparkly-frangipane-0ae6f3.netlify.app/" className="portfolio__item">
							<img src={CarWash}
								alt={"Car Wash"} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;