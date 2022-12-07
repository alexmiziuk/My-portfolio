import React from 'react';
import './About.scss';

const About = () => {
	return (
		<section className="about">
			<div className="container">
				<div className="about__block">
					<div className="about__img"></div>
					<div className="about__content">
						<div className="about__inform"></div>
						<div className="about__skills"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;