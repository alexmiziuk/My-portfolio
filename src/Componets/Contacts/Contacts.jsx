import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';

import './Contacts.scss';
import '../Animate/Animate.css';

import ImgContacts from '../../Image/photo_contacts.jpg';
import Facebook from '../../Icons/contacts_icons/Facebook.svg';
import Telegram from '../../Icons/contacts_icons/Telegram.svg';
import Instagram from '../../Icons/contacts_icons/Instagram.svg';




const Contacts = () => {

	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, [])

	const [modalActive, setModalActive] = useState(false);

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
					button: "Закрити",
					className: "swal-title",
				})
				/* console.log(result.text); */
				console.log("message sent")

			},
				(error) => {
					alert('Error, перевірте з`єднання з інтернетом')
					console.log(error.text);
				}
			);
	};

	return (
		<section className='contacts' >
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
								<div className="contacts__links">
									<img src={Facebook} alt={"facebook"} />
								</div>
							</div>
							<div className="contacts__social contacts__social_degree">
								<div className="contacts__links">
									<img className='size' src={Telegram} alt={'telegram'} />
								</div>
							</div>
							<div className="contacts__social">
								<div className="contacts__links">
									<img src={Instagram} alt={'instagram'} />
								</div>
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
								<textarea name="message" required='required' id="text">
								</textarea >
								<label htmlFor="text">Ваше повідомлення</label>
							</div>
							<div className="center ">
								<button type='submit' className="btn contacts__btn" onClick={() => setModalActive(!modalActive)}>
									<svg width="245px" height="45px" viewBox="0 0 150 60" className="border boder_size">
									</svg>
									<span>Відправити повідомлення</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;