import React from 'react';
import './About.scss';
import Developer from '../../Icons/about_me/dvr_white_24dp.svg';
import Devices from '../../Icons/about_me/devices_white_24dp.svg';
import Design from '../../Icons/about_me/design_white_24dp.svg'

const About = () => {
	return (
		<section className="about" id='aboutid'>
			<div className="container">
				<div className="about__block">


					<div className="about__img"></div>
					<div className="about__content">
						<div className="about__inform">
							<div className="about__subtitle title title-fz16">Про мене</div>
							<div className="title title-fz36">
								Мене звати Олександр
							</div>
							<div className="divider">
								<span></span>
							</div>
							<div className="about__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
							</div>
						</div>
						<div className="about__technologies">
							<div className="about__technology">
								<div className="about__icon">
									<img src={Developer} alt={'icons'} />
								</div>
								<div className="title title-fz14">Web-розробка</div>
								<div className="about__content-tech">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
							</div>
							<div className="about__technology">
								<div className="about__icon">
									<img src={Devices} alt={'icons'} />
								</div>
								<div className="title title-fz14
								">Розробка застосунків</div>
								<div className="about__content-tech">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
							</div>
							<div className="about__technology">
								<div className="about__icon">
									<img src={Design} alt={'icons'} />
								</div>
								<div className="title 
								title-fz14">UI/UX Design</div>
								<div className="about__content-tech">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;