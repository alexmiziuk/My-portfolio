import React from 'react';
import "./BtnEnUk.scss";



const BtnEnUk = ({ language, toggleLanguage }) => {
	return (
	
		<button className="btn-language"
		onClick={toggleLanguage}>
		{language === 'english' ? 'EN' : 'UA'}
		</button>
		
		
		
	);
};

export default BtnEnUk;