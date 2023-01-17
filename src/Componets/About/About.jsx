import React from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';

import './About.scss';
import Developer from '../../Icons/about_me/dvr_white_24dp.svg';
import Devices from '../../Icons/about_me/devices_white_24dp.svg';
import Design from '../../Icons/about_me/design_white_24dp.svg'
import '../Animate/Animate.css';

const About = () => {
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
							<div className="about__subtitle title title-fz16" id='aboutid'>Про мене</div>
							<div className="wow animate__shakeX title title-fz48 about__title" data-wow-duration="1.2s" data-wow-delay="1.5s">
								Привіт! Мене звати Олександр
							</div>
							<div className="divider">
								<span></span>
							</div>
							<div className="about__text">
								Я web-розробник, i створюю веб-сайти, які домогають виділитися серед конкурентів. Якщо ви шукаєте роботу, або плануєте розвивати <span>/</span> розпочати свій бізнес, вам потрібен веб-сайт із правильною структурою, i в цьому я можу бути для вас корисним. Можу і вмію створити портфоліо <span>/</span> веб-сайт  вашої мрії з професійним підходом, який буде відповідати вимогам сучасності, вашій справі і вашій індивідуальності.
							</div>
						</div>
						
					</div>
					<div className="about__technologies">
							<div className="about__technology">
								<div className="about__icon">
									<img src={Developer} alt={'icons'} />
								</div>
								<div className="title title-fz14 about__title-fz14">Web-розробка</div>
								<div className="about__content-tech">Мене надихає те, що мій код може працювати будь-де і для кого завгодно. Насправді це творчість. Веб - надзвичайно креативне середовище, можливість для кожної людини вдосконалювати себе.</div>
							</div>
							<div className="about__technology">
								<div className="about__icon">
									<img src={Devices} alt={'icons'} />
								</div>
								<div className="title title-fz14
								">Розробка застосунків</div>
								<div className="about__content-tech">Я отримую велике задоволення від того, що створюю веб-застосунки. Я хочу щоб їх використовували у повсякденному житті, або професійній діяльності. Свій новий проект я рощу як дитину.</div>
							</div>
							<div className="about__technology">
								<div className="about__icon">
									<img src={Design} alt={'icons'} />
								</div>
								<div className="title 
								title-fz14">UI/UX Design</div>
								<div className="about__content-tech">Мені подобається продумувати, аналізувати та організовувати. При цьому обожнюю візуальну красу та естетику. Кожен проект це новий досвід, знання та ідеї.</div>
							</div>
						</div>
				</div>
			</div>
		</section>
	);
};

export default About;