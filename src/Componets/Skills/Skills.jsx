import React from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';

import './Skills.scss';
import IconeCss from '../../Icons/skills/css 4.svg';
import IconeHtml from '../../Icons/skills/html 6.svg';
import IconeJQ from '../../Icons/skills/icons8-jquery-is-a-javascript-library-designed-to-simplify-html-50.svg';
import IconeJS from '../../Icons/skills/js 1.svg';
import IconeReact from '../../Icons/skills/atom (1) 1.svg';
import Skills_ from '../../Image/skills.png';
import '../Animate/Animate.css';

const Skills = () => {
	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, [])

	return (
		<section className='skills'  >
			<div className="container">
				<h2 className="title title-fz16 education__title" id='skillsid'>
					Навички
				</h2>
				<div className="title title-fz36 education__sibtitle">
					Що я використовую у роботі
				</div>
				<div className="divider">
					<span></span>
				</div>
				<div className="skills__wrapper">
					<div className="wow animate__backInLeft skills__variety" data-wow-duration="3s" data-wow-delay="0s">
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
							Саме він створює каркас вашого сайту або програми, а п'ята версія дозволить мені створювати більш SEO-оптимізовану структуру вашого продукту
						</div>
					</div>
					<div className="wow animate__backInLeft skills__variety" data-wow-duration="2.6s" data-wow-delay="0s">
						<div className='skills__img'>
							<img
								src={IconeCss}
								alt={'Css'}
							/>
						</div>
						<h3 className='title title-fz14 skills__title skills__title'>
							CSS3
						</h3>
						<div className='skills__text'>Ця мова стилів дозволяє мені створювати абсолютно будь-який зовнішній вигляд вашого сайту або програми. Все обмежується лише вашою фантазією!</div>
					</div>
					<div className="wow animate__backInLeft skills__variety" data-wow-duration="2.2s" data-wow-delay="0s">
						<div className='skills__img'>
							<img
								src={IconeJS}
								alt={'JavaScript'}
							/>
						</div>
						<h3 className='title title-fz14 skills__title'>
							Java Script
						</h3>
						<div className='skills__text'>Ця мова програмування дозволяє оживити все, що завгодно: слайдери, вікна, підказки, вкладки, отримання даних від сервера та багато іншого</div>
					</div>
					<div className="wow animate__backInLeft skills__variety" data-wow-duration="1.8s" data-wow-delay="0s">
						<div className='skills__img'>
							<img
								src={IconeJQ}
								alt={'Jquery'}
							/>
						</div>
						<h3 className='title title-fz14 skills__title'>
							Jquery
						</h3>
						<div className='skills__text'>Бібліотека Jquery дозволить прискорити розробку. Без необхідності інтегрувати в проект ми її не будемо, але звичка роботи з нею присутня</div>
					</div>
					<div className="wow animate__backInLeft skills__variety" data-wow-duration="1.4s" data-wow-delay="0s">
						<div className='skills__img'>
							<img
								src={IconeReact}
								alt={React}
							/>
						</div>
						<h3 className='title title-fz14 skills__title'>
							React
						</h3>
						<div className='skills__text'>Ця бібліотека дозволяє створювати веб-додатки. Ми можемо створити максимально інтерактивний продукт саме під ваші цілі</div>
					</div>
				</div>
				<div>
					<img className='skills__img-skills' src={Skills_} alt="skills" />
				</div>
			</div>
		</section>
	);
};

export default Skills;