import React from 'react';
import './MenuList.scss'

const MenuList = ({items}) => {
	return (
		<ul className="menu__list">
			{items.map(item => (
				<li key={item.id} className="menu__link"><a href={item.href}>{item.value}</a></li>
			))}
		</ul>
	);
}

export default MenuList;


