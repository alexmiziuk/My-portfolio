import React from 'react';

import './Sidepanel.scss'

import facebook from '../../Icons/social/facebook.svg'
import instagram from '../../Icons/social/instagram.svg'
import Telegram from '../../Icons/social/telegram.svg'


const Sidepanel = () => {
	return (
		<aside className='sidepanel'>
			<a href='https://www.facebook.com/sasha.mizuk'  className="sidepanel__link">
			<img 
         alt={"facebook"}
         src={facebook}/></a>
			<a href='https://www.instagram.com/sumifares/' className="sidepanel__link">
			<img 
         alt={"instagram"}
         src={instagram}/></a>
			<a href='https://t.me/AlexLikeJazz' className="sidepanel__link">
			<img className='telegram'
         alt={"Telegram"}
         src={Telegram}/></a>
			<div className="sidepanel__divider">

			</div>
			<div className="sidepanel__text">
				<span>Соціальні мережі</span>
			</div>
		</aside>
	);
};

export default Sidepanel;