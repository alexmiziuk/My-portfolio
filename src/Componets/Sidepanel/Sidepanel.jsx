import React from 'react';

import './Sidepanel.scss'

import viber from '../../Icons/contacts_icons/viber.svg';
import whatsapp from '../../Icons/contacts_icons/whatsapp.svg';
import Telegram from '../../Icons/social/telegram.svg'


const Sidepanel = ({getAllTextsOfSite}) => {
	return (
		<aside className='sidepanel'>
			<a href='https://api.whatsapp.com/send?phone=380663790585'  className="sidepanel__link">
			<img 
         alt={"icon whatsapp"}
         src={whatsapp}/></a>
			<a href='https://invite.viber.com/?g=GWP24O7LclDi1nedfpqGv1XHPISrnhjG' className="sidepanel__link">
			<img 
         alt={"icon viber"}
         src={viber}/></a>
			<a href='https://t.me/OleksandrMiziyk' className="sidepanel__link">
			<img className='telegram'
         alt={"icon telegram"}
         src={Telegram}/></a>
			<div className="sidepanel__divider">

			</div>
			<div className="sidepanel__text">
				<span>{getAllTextsOfSite("sidePanel")}</span>
			</div>
		</aside>
	);
};

export default Sidepanel;