import React from 'react';
import facebook from '../../Icons/social/facebook.svg'
import instagram from '../../Icons/social/instagram.svg'
import github from '../../Icons/social/github.svg'
import './Sidepanel.scss'

const Sidepanel = () => {
	return (
		<aside className='sidepanel'>
			<a href="#" className="sidepanel__link">
			<img /* className={Sidepanel.img} */
         alt={"facebook"}
         src={facebook}/></a>
			<a href="#" className="sidepanel__link">
			<img /* className={Sidepanel.img} */
         alt={"instagram"}
         src={instagram}/></a>
			<a href="#" className="sidepanel__link">
			<img /* className={Sidepanel.img} */
         alt={"github"}
         src={github}/></a>
			<div className="sidepanel__divider">

			</div>
			<div className="sidepanel__text">
				<span>Соціальні мережі</span>
			</div>
		</aside>
	);
};

export default Sidepanel;