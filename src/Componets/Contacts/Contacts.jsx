import WOW from 'wowjs';
import { useEffect } from 'react';
import { useState } from 'react';

import { ArrowScrollUp } from '../ArrowScrollUp/ArrowScrollUp';

import sendMessage from '../../sendMessage/sendMessage';
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

	const [formData, setFormData] = useState({
		user_name: '',
		user_email: '',
		message: '',
		isPrivacyChecked: false // Состояние для отслеживания флажка согласия с политикой конфиденциальности
	});

	const [errors, setErrors] = useState({});

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value // Обновляем состояние в зависимости от типа поля
		});
		setErrors({
			...errors,
			[name]: '' // Очищаем ошибку для данного поля
		});

		// Если чекбокс согласия был отмечен, то очистить сообщение об ошибке
		if (name === 'isPrivacyChecked' && checked) {
			setErrors({
				...errors,
				privacy: ''
			});
		}
	};

	// Функция для очистки сообщения об ошибке при клике на поле ввода
	const handleInputClick = (fieldName) => {
		setErrors({
			...errors,
			[fieldName]: ''
		});
	};

	const validateForm = () => {
		let isValid = true;
		const errors = {};

		if (!formData.user_name.trim()) {
			errors.user_name = 'Имя обязательно для заполнения';
			isValid = false;
		}

		if (!formData.user_email.trim()) {
			errors.user_email = 'Email обязателен для заполнения';
			isValid = false;
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
			errors.user_email = 'Некорректный формат email';
			isValid = false;
		}

		if (!formData.message.trim()) {
			errors.message = 'Сообщение обязательно для заполнения';
			isValid = false;
		}

		if (!formData.isPrivacyChecked) { // Проверяем состояние флажка согласия с политикой конфиденциальности
			errors.privacy = 'Необходимо согласиться с политикой конфиденциальности';
			isValid = false;
		}

		setErrors(errors);
		return isValid;
	};

	const [isLoading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			const isValid = validateForm();
			if (isValid) {
				const formData = new FormData(event.target);
				const values = Object.fromEntries(formData.entries());
				const message = `Ім'я: ${values.user_name} Email: ${values.user_email} Повідомлення: ${values.message}`;
				setLoading(true);
				await sendMessage(message, getAllTextsOfSite);

				// Очищаем состояние формы после успешной отправки
				setFormData({
					user_name: '',
					user_email: '',
					message: '',
					isPrivacyChecked: false
				});

				// Очищаем состояние ошибок
				setErrors({});

				// Обновляем isLoading после отправки
				setLoading(false);
			}
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
						<form className='contacts__form' onSubmit={handleSubmit} noValidate>
							<div className='contacts__input'>
								<input
									name='user_name'
									id='name' type="text"
									maxLength='50'
									value={formData.user_name}
									onChange={handleChange}
									onClick={() => handleInputClick('user_name')} />
								<label htmlFor="name">{getAllTextsOfSite("contactsLabelName")}</label>
								{errors.user_name && <span className="error__message error__message-name">{errors.user_name}</span>}
							</div>
							<div className='contacts__input'>
								<input
									name="user_email"
									id='email'
									type="email"
									value={formData.user_email}
									onChange={handleChange}
									onClick={() => handleInputClick('user_email')} />
								<label htmlFor="email">{getAllTextsOfSite("contactsLabelEmail")}</label>
								{errors.user_email && <span className="error__message error__message-email">{errors.user_email}</span>}
							</div>
							<div className='contacts__textarea'>
								<textarea
									className='contacts__textarea'
									maxLength='2000'
									name="message"
									id="text"
									value={formData.message}
									onChange={handleChange}
									onClick={() => handleInputClick('message')}>
								</textarea >
								<label className='contacts__label' htmlFor="text">{getAllTextsOfSite("contactsLabelMessage")}</label>
								{errors.message && <span className="error__message error__message-textarea">{errors.message}</span>}
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
								<input
									className='contacts__checkbox'
									type="checkbox"
									name="isPrivacyChecked"
									checked={formData.isPrivacyChecked}
									onChange={handleChange}
								/>
								<span className='contacts__agreement' id='link'>{getAllTextsOfSite("contactsLinkPrivacyFirst")}
									<a href="/#privacy"
										className='button__privacy'
										onClick={() => setPrivacyPolicy(!privacyPolicy)}>{getAllTextsOfSite("contactsLinkPrivacySecond")}
									</a>
								</span>
								{errors.privacy && <span className="error__message error__message-privacy">{errors.privacy}</span>}
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
