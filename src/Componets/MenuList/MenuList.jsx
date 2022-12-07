import React from 'react';
import './MenuList.scss'

const MenuList = () => {
	const Items = ['ПРО МЕНЕ', 'МІЙ ДОСВІД', 'МОЇ НАВИЧКИ', 'МОЇ РОБОТИ', 'ПРАЙС-ЛИСТ', 'КОНТАКТИ'];

	return (
		<ul className="menu__list">
			{Items.map(item => (
				<li key={item} className="menu__link"><a href='https://qna.habr.com/q/528748'>{item}</a></li>
			))}
		</ul>
	);
}

export default MenuList;


