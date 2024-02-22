import React from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';

import './Skills.scss';
import '../Animate/Animate.css';

import IconeCss from '../../Icons/skills/css.svg';
import IconeHtml from '../../Icons/skills/html.svg';
import IconeJQ from '../../Icons/skills/jq.svg';
import IconeJS from '../../Icons/skills/js.svg';
import IconeReact from '../../Icons/skills/atom.svg';
import Skills_ from '../../Image/skills.png';


const Skills = ({ getAllTextsOfSite }) => {
	useEffect(() => {
		new WOW.WOW({
			live: false
			
		}).init();
	}, [])

	

	return (
		<section className='skills'  >
			<div className="container">
				<h2 className="title title-fz16 skills__item" id='skillsid'>
					{getAllTextsOfSite("skillsSubtitle")}
				</h2>
				<div className="title title-fz48 skills__subtitle">
				{getAllTextsOfSite("skillsTitle")}
				</div>
				<div className="divider">
					<span></span>
				</div>
				<div className="skills__wrapper">
					<div className="wow animate__backInLeft skills__variety skills__variety-first " data-wow-duration="3s" data-wow-delay="0s">
						<div className='skills__img'>
							<img
								src={IconeHtml}
								alt={'Html'}
							/>
						</div>
						<h3 className='title title-fz14 skills__title'>
							HTML5
						</h3>
						<div className='skills__text'>
						{getAllTextsOfSite("skillsCardFirst")}
						</div>
					</div>
					<div className="wow animate__backInLeft skills__variety skills__variety-second" data-wow-duration="2.6s" data-wow-delay="0s">
						<div className='skills__img'>
							<img
								src={IconeCss}
								alt={'Css'}
							/>
						</div>
						<h3 className='title title-fz14 skills__title skills__title'>
							CSS3
						</h3>
						<div className='skills__text'>{getAllTextsOfSite("skillsCardSecond")}</div>
					</div>
					<div className="wow animate__backInLeft skills__variety skills__variety-third" data-wow-duration="2.2s" data-wow-delay="0s">
						<div className='skills__img'>
							<img
								src={IconeJS}
								alt={'JavaScript'}
							/>
						</div>
						<h3 className='title title-fz14 skills__title'>
							Java Script
						</h3>
						<div className='skills__text'>{getAllTextsOfSite("skillsCardThird")}</div>
					</div>
					<div className="wow animate__backInLeft skills__variety skills__variety-forth" data-wow-duration="1.8s" data-wow-delay="0s">
						<div className='skills__img'>
							<img
								src={IconeJQ}
								alt={'Jquery'}
							/>
						</div>
						<h3 className='title title-fz14 skills__title'>
							Jquery
						</h3>
						<div className='skills__text'>{getAllTextsOfSite("skillsCardFourth")}</div>
					</div>
					<div className="wow animate__backInLeft skills__variety skills__variety-fifth" data-wow-duration="1.4s" data-wow-delay="0s">
						<div className='skills__img'>
							<img
								src={IconeReact}
								alt={React}
							/>
						</div>
						<h3 className='title title-fz14 skills__title'>
							React
						</h3>
						<div className='skills__text'>{getAllTextsOfSite("skillsCardFifth")}</div>
					</div>
				</div>
				<div className='skills__boundary'>
					<img className='skills__img-skills' src={Skills_} alt="skills" />
				</div>
			</div>
		</section>
	);
};

export default Skills;