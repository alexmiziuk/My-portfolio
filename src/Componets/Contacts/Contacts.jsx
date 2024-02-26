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
import Linkedin from '../../Icons/contacts_icons/linkedin.svg';
import Viber from '../../Icons/contacts_icons/viber.svg';
import Whatsapp from '../../Icons/contacts_icons/whatsapp.svg';
import Github from '../../Icons/contacts_icons/github.svg';

const Contacts = ({ privacyPolicy, setPrivacyPolicy, getAllTextsOfSite }) => {

	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, [])

	const baseUrl = 'https://api.telegram.org/bot/';

	const sendMessage = async (message) => {
		try {
			const url = `${baseUrl}sendMessage?chat_id=-4180692441&text=${message}`;
			const response = await fetch(url);
			if (response.ok) {
				const responseData = await response.json();
				console.log('response', responseData);
				swal({
					title: getAllTextsOfSite('swalTitleTrue'),
					text: getAllTextsOfSite('swalTextTrue'),
					button: false,
					className: "swal-title",
					timer: 4500,
				});
			} else {
				swal({
					title: getAllTextsOfSite('swalTitleFalse'),
					text: getAllTextsOfSite('swalTextFalse'),
					button: false,
					className: "swal-title",
					timer: 4500,
				});
				throw new Error('Ошибка при отправке сообщения');
			}
		} catch (error) {
			console.error('Ошибка при отправке сообщения:', error);
			swal({
				title: getAllTextsOfSite('swalTitleFalse'),
				text: getAllTextsOfSite('swalTextFalse'),
				button: false,
				className: "swal-title",
				timer: 4500,
			});
		}
	};

	const [isLoading, setLoading] = useState(false);
	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			const formData = new FormData(event.target);
			const values = Object.fromEntries(formData.entries());
			const message = `Имя: ${values.user_name} Email: ${values.user_email} Сообщение: ${values.message}`;
			setLoading(true);
			await sendMessage(message);
			event.target.reset();
		} catch (error) {
			console.error('Ошибка при обработке формы:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className={privacyPolicy ? 'contacts unvisibal' : 'contacts'} >
			<div className="container">
				<div className="contacts__wrapper">
					<div className="contacts__photo">
						<img src={ImgContacts} alt={'contacts'} />
					</div>
					<div className="contacts__descr">
						<h2 className="title title-fz16 contacts__title" id='contactsid'>
							{getAllTextsOfSite("contactsSubTitle")}
						</h2>
						<div className="wow animate__shakeX title title-fz48 contacts__subtitle" data-wow-duration="1.2s" data-wow-delay="1.5s">
							{getAllTextsOfSite("contactsTitle")}
						</div>
						<div className="divider">
							<span></span>
						</div>
						<div className="title title-fz14 contacts__text">
							{getAllTextsOfSite("contactsFormTitle")}
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
									<img className='linkedin' src={Linkedin} alt={'Linkedin'} />
								</a>
							</div>
							<div className="contacts__social">
								<a href='https://invite.viber.com/?g=GWP24O7LclDi1nedfpqGv1XHPISrnhjG' className="contacts__links">
									<img className='viber' src={Viber} alt={'Viber'} />
								</a>
							</div>
							<div className="contacts__social">
								<a href=' https://api.whatsapp.com/send?phone=380663790585' className="contacts__links">
									<img src={Whatsapp} alt={'Whatsapp'} />
								</a>
							</div>
							<div className="contacts__social">
								<a href='https://github.com/alexmiziuk' className="contacts__links">
									<img className='github' src={Github} alt={'github'} />
								</a>
							</div>
						</div>
						<div className="title title-fz14 contacts__text">
							{getAllTextsOfSite("contactsFormTitleSecond")}
						</div>
						<form className='contacts__form' onSubmit={handleSubmit}>
							<div className='contacts__input'>
								<input name='user_name' required='required' id='name' type="text" maxLength='50' />
								<label htmlFor="name">{getAllTextsOfSite("contactsLabelName")}</label>
							</div>
							<div className='contacts__input'>
								<input name="user_email" required='required' id='email' type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" maxLength='50' />
								<label htmlFor="email">{getAllTextsOfSite("contactsLabelEmail")}</label>
							</div>
							<div className='contacts__textarea'>
								<textarea className='contacts__textarea' maxLength='2000' name="message" id="text">
								</textarea >
								<label className='contacts__label' htmlFor="text">{getAllTextsOfSite("contactsLabelMessage")}</label>
							</div>
							<div className="center " >
								<button className="btn contacts__btn">
									{isLoading ? "" :
										(<span>{getAllTextsOfSite("contactsFormBtn")}</span>)}
								</button>
								{isLoading ? <div className="lds-ellipsis">
									<div></div>
									<div></div>
									<div></div>
									<div></div>
								</div> : ''}
							</div>
							<div className="contacts__privacy">
								<input className='contacts__checkbox' type="checkbox" required='required' />
								<span className='contacts__agreement' id='link'>{getAllTextsOfSite("contactsLinkPrivacyFirst")}
									<a href="/#privacy"
										className='button__privacy'
										onClick={() => setPrivacyPolicy(!privacyPolicy)}>{getAllTextsOfSite("contactsLinkPrivacySecond")}
									</a>
								</span>
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
