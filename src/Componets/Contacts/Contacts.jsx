import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import { ArrowScrollUp } from '../ArrowScrollUp/ArrowScrollUp';


import './Contacts.scss';
import '../Animate/Animate.css';


import ImgContacts from '../../Image/photo_contacts.jpg';
import Facebook from '../../Icons/contacts_icons/Facebook.svg';
import Telegram from '../../Icons/contacts_icons/telegram.svg';
import Instagram from '../../Icons/contacts_icons/Instagram.svg';
import Linkeden from '../../Icons/contacts_icons/linkeden.svg';
import Viber from '../../Icons/contacts_icons/viber.svg';
import WhatSapp from '../../Icons/contacts_icons/whatsapp.svg';
import Github from '../../Icons/contacts_icons/github.svg';





const Contacts = ({privacyPolicy, setPrivacyPolicy}) => {

	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, [])

	const [isLoading, setLoading] = useState(false);
	const fetchData = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3500)
	}

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();


		emailjs
			.sendForm(
				'service_iz3q98w',
				'template_o8oero8',
				form.current,
				'Fbwj128saP-tFdXyN'
			)
			.then((result) => {
				e.target.reset();
				swal({
					title: "Дякую за ваше повідомлення",
					text: "Я обов'язково зв'яжуся з вами найближчим часом",
					button: false,
					className: "swal-title",
					timer: 3500,
				})
				console.log(result.text);
				console.log("message sent")

			},
				(error) => {
					e.target.reset();
					swal({
						title: "Щось пішло не так",
						text: "Швидше за все проблеми зі зв'язком, перевірте інтернет",
						button: false,
						className: "swal-title",
						timer: 3500,
					})
					console.log(error.text);
				}
			);
	};
	return (
		<section className={privacyPolicy? 'contacts unvisibal': 'contacts'} >
			<div className="container">
				<div className="contacts__wrapper">
					<div className="contacts__photo">
						<img src={ImgContacts} alt={'contacts'} />
					</div>
					<div className="contacts__descr">
						<h2 className="title title-fz16 contacts__title" id='contactsid'>
							Контакти
						</h2>
						<div className="wow animate__shakeX title title-fz48 contacts__subtitle" data-wow-duration="1.2s" data-wow-delay="1.5s">
							Зв'яжіться зі мною
						</div>
						<div className="divider">
							<span></span>
						</div>
						<div className="title title-fz14 contacts__text">
							Будь-яким зручним для вас способом
						</div>
						<div className="contacts__socials">
							<div className="contacts__social">
								<a href='https://www.facebook.com/sasha.mizuk' className="contacts__links">
									<img src={Facebook} alt={"facebook"} />
								</a>
							</div>
							<div className="contacts__social">
								<a href='https://t.me/AlexLikeJazz' className="contacts__links">
									<img className='telegram' src={Telegram} alt={'telegram'} />
								</a>
							</div>
							<div className="contacts__social">
								<a href='https://www.instagram.com/sumifares/' className="contacts__links">
									<img className='instagram' src={Instagram} alt={'instagram'} />
								</a>
							</div>
							<div className="contacts__social ">
								<a href='https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%BC%D0%B8%D0%B7%D1%8E%D0%BA-290766112/' className="contacts__links">
									<img className='linkeden' src={Linkeden} alt={'Linkeden'} />
								</a>
							</div>
							<div className="contacts__social">
								<a href='https://invite.viber.com/?g=GWP24O7LclDi1nedfpqGv1XHPISrnhjG' className="contacts__links">
									<img className='viber' src={Viber} alt={'Viber'} />
								</a>
							</div>
							<div className="contacts__social">
								<a href=' https://api.whatsapp.com/send?phone=380663790585' className="contacts__links">
									<img src={WhatSapp} alt={'Whatsupp'} />
								</a>
							</div>
							<div className="contacts__social">
								<a href='https://github.com/alexmiziuk' className="contacts__links">
									<img className='github' src={Github} alt={'github'} />
								</a>
							</div>
						</div>
						<div className="title title-fz14 contacts__text">
							Або залиште ваші дані, я сам вам напишу
						</div>
						<form ref={form} onSubmit={sendEmail} className='contacts__form'>
							<div className="contacts__input">
								<input name='user_name' required='required' id='name' type="text" />
								<label htmlFor="name">Ваше ім'я</label>
							</div>
							<div className="contacts__input">
								<input name="user_email" required='required' id='email' type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
								<label htmlFor="email">Ваша пошта</label>
							</div>
							<div className="contacts__textarea">
								<textarea name="message" id="text">
								</textarea >
								<label htmlFor="text">Ваше повідомлення</label>
							</div>
							<div className="center " >
								<button className="btn contacts__btn" onClick={fetchData}>
									{isLoading ? "" :
										(<span>Відправити повідомлення</span>)}
								</button>
								{isLoading ? <div class="lds-ellipsis">
									<div></div>
									<div></div>
									<div></div>
									<div></div>
								</div> : ''}
							</div>
							<div className="contacts__privacy">
								<input type="checkbox" required='required' />
								<span className='contacts__agreement' id='link'>Я згоден(а) із <a  href= "/#privacy" className='button__privacy' onClick={() =>  setPrivacyPolicy(!privacyPolicy)}>політикою конфіденційності</a></span>

							</div>
							<ArrowScrollUp />
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;