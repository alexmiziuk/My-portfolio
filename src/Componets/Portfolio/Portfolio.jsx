import React from 'react';

import './Portfolio.scss';
import '../Animate/Animate.css';

import coffeeShop from '../../Image/works/pleasure-bg.png';
import CarWash from '../../Image/works/isckraCarWash.jpg';
import Interior from '../../Image/works/Interior.jpg';
import Nature from '../../Image/works/nature.jpg';
import Tehnology from '../../Image/works/tehnology.jpg';

const Portfolio = () => {
	
	return (
		<section className="portfolio" >
			<div className="container">
				<h2 className="title title-fz16 portfolio__title" id='portfolioid'>
					Портфоліо
				</h2>
				<div className="title title-fz48 portfolio__subtitle" >
					Мої роботи
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
						<a href="https://65154654692f1e7516f78496--sparkly-frangipane-0ae6f3.netlify.app/" className="portfolio__item">
							<img src={CarWash}
								alt={"Car Wash"} />
						</a>
					</div>
					<div className='portfolio__efect' id='three'>
						<a href="/#nameOfId" className="portfolio__item">
							<img src={Interior}
								alt={"Interior"} />
						</a>
					</div>
					<div className='portfolio__efect' id='fourth'>
						<a href="/#nameOfId" className="portfolio__item ">
							<img className='vertical'src={Nature}
								alt={"Nature"} />
						</a>
					</div>
					<div className='portfolio__efect' id='fifth'>
						<a href="/#nameOfId" className="portfolio__item">
							<img src={Tehnology}
								alt={"Tehnology"} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;