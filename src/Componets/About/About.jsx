import React from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';

import './About.scss';
import '../Animate/Animate.css';

import Developer from '../../Icons/about_me/dvr_white_24dp.svg';
import Devices from '../../Icons/about_me/devices_white_24dp.svg';
import Design from '../../Icons/about_me/design_white_24dp.svg'


const About = ({ getAllTextsOfSite }) => {
	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, [])

	return (
		<section className="about">
			<div className="container">
				<div className="about__block">
					<div className="about__img"></div>
					<div className="about__content">
						<div className="about__inform">
							<div className="about__subtitle title title-fz16" id='aboutid'>{getAllTextsOfSite("aboutSubtitle")}</div>
							<div className="wow animate__shakeX title title-fz48 about__title" data-wow-duration="1.2s" data-wow-delay="1.5s">
							{getAllTextsOfSite("aboutTitle")}
							</div>
							<div className="divider">
								<span></span>
							</div>
							<div className="about__text">
							{getAllTextsOfSite("aboutTextFirst")} <span>/</span> {getAllTextsOfSite("aboutTextSecond")} <span>/</span> {getAllTextsOfSite("aboutTextThird")}
							</div>
						</div>
					</div>
					<div className="about__technologies">
						<div className="about__technology">
							<div className="about__icon">
								<img src={Developer} alt={'icons'} />
							</div>
							<div className="title title-fz14 about__title-fz14">{getAllTextsOfSite("aboutTitleContentFirst")}</div>
							<div className="about__content-tech">{getAllTextsOfSite("aboutContentFirst")}</div>
						</div>
						<div className="about__technology">
							<div className="about__icon">
								<img src={Devices} alt={'icons'} />
							</div>
							<div className="title title-fz14
								">{getAllTextsOfSite("aboutTitleContentSecond")}</div>
							<div className="about__content-tech">{getAllTextsOfSite("aboutContentSecond")}</div>
						</div>
						<div className="about__technology">
							<div className="about__icon">
								<img src={Design} alt={'icons'} />
							</div>
							<div className="title 
								title-fz14">UI/UX Design</div>
							<div className="about__content-tech">{getAllTextsOfSite("aboutContentThird")}</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;