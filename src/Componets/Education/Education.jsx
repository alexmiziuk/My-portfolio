import React from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';

import '../Animate/Animate.css';
import './Education.scss';

import Icons from '../../Icons/experience/education_white_24dp.svg';
import Webicon from '../../Icons/experience/cast_for_education_white_24dp.svg';
import Udemiicon from '../../Icons/experience/developer_board_white_24dp.svg';
import Study from '../../Image/education__code1.png'
import personWalk from '../../Icons/education/Person__walk.svg'
import person__reverse from '../../Icons/education/person__reverse.svg'
import personTransporant from '../../Icons/education/Persone__run.svg'

const Education = ({ getAllTextsOfSite }) => {
	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, [])
	return (
		<section className='education' >
			<div className="container">
				<h2 className="title title-fz16 education__title" id='educationid'>
					{getAllTextsOfSite("educationSubTitle")}
				</h2>
				<div className=" title title-fz48 education__subtitle">
					{getAllTextsOfSite("educationTitle")}
				</div>
				<div className="divider">
					<span></span>
				</div>
				<div className="education__outerline">
					<span></span>
				</div>
				<div className="education__wrapper">
					<div className="education__box wow animate__rotateInDownLeft" data-wow-duration="1.5s" data-wow-delay="0s">
						<img className="education__img" src={Study} alt="study" /><span>
						</span>
					</div>
					<div className="education__column">
						<h3 className=" title title-fz20 education__column-title"
							id='first'>
							{getAllTextsOfSite("educationTitleContent")}
						</h3>
						<ul>
							<li>
								<div className="education__line-one">
									<span>
									</span>
								</div>
								<div className="education__line-two">
									<span>
									</span>
								</div>
								<div className="education__line-three"></div>
								<div className="education__item">
									<img className='education__direction education__direction-position' src={person__reverse} alt='persone__reverse'></img>
									<div className="education__item-head">
										<div className="education__item-icon">
											<img src={Icons} alt={'university'} />
										</div>
										<h4 className='title title-fz14 education__finished'>
											{getAllTextsOfSite("educationContentItemFirst")}
										</h4>
										<div className="education__degree">{getAllTextsOfSite("educationContentSubItemFirst")}</div>
										<div className="education__body">
											{getAllTextsOfSite("educationContentFirst")}
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="education__line-one">
									<span>
									</span>
								</div>
								<div className="education__line-two">
									<span>
									</span>
								</div>
								<div className="education__line-three"></div>
								<div className="education__item">
									<img className='education__direction' src={personWalk} alt='persone__walk'></img>
									<div className="education__item-head">
										<div className="education__item-icon">
											<img src={Webicon} alt={'Web-developer'} />
										</div>
										<h4 className='title title-fz14 education__finished'>
											Udemy
										</h4>
										<div className="education__degree">{getAllTextsOfSite("educationContentSubItemSecondOne")}
											<span> |</span>{getAllTextsOfSite("educationContentSubItemSecondTwo")}</div>
										<div className="education__body">
											{getAllTextsOfSite("educationContentSecond")}
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="education__line-one">
									<span>
									</span>
								</div>
								<div className="education__line-two">
									<span>
									</span>
								</div>
								<div className="education__line-three"></div>
								<div className="education__item">
									<img className='education__direction' src={personTransporant} alt='persone__transporant'></img>
									<div className="education__item-head">
										<div className="education__item-icon">
											<img src={Udemiicon} alt={'udemi'} />
										</div>
										<h4 className='title title-fz14 education__finished'>
											Udemy
										</h4>
										<div className="education__degree">{getAllTextsOfSite("educationContentSubItemThird")}</div>
										<div className="education__body">
											{getAllTextsOfSite("educationContentThird")}
										</div>
									</div>
								</div>
							</li>

						</ul>
					</div>

				</div>
			</div>
		</section>
	);
};

export default Education;