import React from 'react';
import './Portfolio.scss';
import Uber from '../../Image/works/uber.jpg';
import Pulse from '../../Image/works/pulse.jpg';
import Bread from '../../Image/works/bread.jpg';
import Plans from '../../Image/works/plans.jpg';
import Ipad from '../../Image/works/ipad.jpg';

const Portfolio = () => {
	return (
		<section className="portfolio">
			<div className="container">
				<h2 className="title title_fz16 portfolio__title">
					Портфоліо
				</h2>
				<div className="title title_fz36 portfolio__subtitle">
					Мої роботи
				</div>
				<div className="divider">
					<span></span>
				</div>
				<div className="portfolio__wrapper">
					<div className='portfolio__efect' id='first'>
						<a href="#" className="portfolio__item">
							<img src={Uber}
								alt={"uber"} />
						</a>
					</div>
					<div className='portfolio__efect' id='second'>
						<a href="#" className="portfolio__item">
							<img src={Pulse}
								alt={"pulse"} />
						</a>
					</div>
					<div className='portfolio__efect' id='three'>
						<a href="#" className="portfolio__item">
							<img src={Bread}
								alt={"bread"} />
						</a>
					</div>
					<div className='portfolio__efect' id='fourth'>
						<a href="#" className="portfolio__item ">
							<img className='vertical'src={Plans}
								alt={"plans"} />
						</a>
					</div>
					<div className='portfolio__efect' id='fifth'>
						<a href="#" className="portfolio__item">
							<img src={Ipad}
								alt={"ipad"} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;