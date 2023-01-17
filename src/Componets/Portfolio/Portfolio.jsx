import React from 'react';

import './Portfolio.scss';
import '../Animate/Animate.css';

import Business from '../../Image/works/business1.jpg';
import City from '../../Image/works/city.jpg';
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
						<a href="/#" className="portfolio__item">
							<img src={Business}
								alt={"uber"} />
						</a>
					</div>
					<div className='portfolio__efect' id='second'>
						<a href="/#" className="portfolio__item">
							<img src={City}
								alt={"pulse"} />
						</a>
					</div>
					<div className='portfolio__efect' id='three'>
						<a href="/#" className="portfolio__item">
							<img src={Interior}
								alt={"bread"} />
						</a>
					</div>
					<div className='portfolio__efect' id='fourth'>
						<a href="/#" className="portfolio__item ">
							<img className='vertical'src={Nature}
								alt={"plans"} />
						</a>
					</div>
					<div className='portfolio__efect' id='fifth'>
						<a href="/#" className="portfolio__item">
							<img src={Tehnology}
								alt={"ipad"} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;