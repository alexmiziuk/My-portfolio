import React from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';

import '../Animate/Animate.css';
import './Education.scss';

import Icons from '../../Icons/experience/education_white_24dp.svg';
import Webicon from '../../Icons/experience/cast_for_education_white_24dp.svg';
import Udemiicon from '../../Icons/experience/developer_board_white_24dp.svg';


const Education = () => {
	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, [])
	return (
		<section className='education' >
			<div className="container">
				<h2 className="title title-fz16 education__title" id='educationid'> 
					Освіта
				</h2>
				<div className=" title title-fz36 education__sibtitle">
					Знання які мені домогають
				</div>
				<div className="divider">
					<span></span>
				</div>
				<div className="education__wrapper">
					<div className="education__column">
						<h3 className=" title title-fz20 education__column-title wow animate__rotateInDownLeft"
						data-wow-duration="1.5s" data-wow-delay="0s" id='first'>
							Навчання
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
									<div className="education__item-head">
										<div className="education__item-icon">
											<img src={Icons} alt={'university'} />
										</div>
										<h4 className='title title-fz14 education__finished'>
											ДГУ ім. С. С. Прокоф'єва
										</h4>
										<div className="education__degree">Диплом спеціаліста</div>
										<div className="education__body">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.
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
									<div className="education__item-head">
										<div className="education__item-icon">
											<img src={Webicon} alt={'Web-developer'} />
										</div>
										<h4 className='title title-fz14 education__finished'>
										Udemi
										</h4>
										<div className="education__degree">Курс по Web-розробці <span>|</span> Курс по JavaScript</div>
										<div className="education__body">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.
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
									<div className="education__item-head">
										<div className="education__item-icon">
											<img src={Udemiicon} alt={'udemi'} />
										</div>
										<h4 className='title title-fz14 education__finished'>
										Udemi
										</h4>
										<div className="education__degree">Курс по React</div>
										<div className="education__body">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.
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