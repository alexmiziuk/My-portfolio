import React from 'react';

import { ArrowScrollUp } from '../ArrowScrollUp/ArrowScrollUp';

import './Privacy.scss';


const Privacy = ({ privacy, setPrivacy, getAllTextsOfSite }) => {
	return (
		<div className={privacy ? 'privacy visible' : 'privacy'} id='privacy' >
			<a className='privacy__btn' onClick={() => setPrivacy(false)} href='/#link'>
				<svg className='svg-pz' width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="#91C9FF" />
				</svg>
			</a>
			<div className="container">
				<h1>{getAllTextsOfSite("privacyMainTitle")}</h1>
				<h2>{getAllTextsOfSite("privacyTitleFirst")}</h2>
				<p>{getAllTextsOfSite("privacyTextFirstOne")}
					<br></br> <br />
					{getAllTextsOfSite("privacyTextFirstTwo")} <br></br>
					{getAllTextsOfSite("privacyTextFirstThree")} <a href='https://my-portfolio-aeb86.web.app' alt='Link to website'>https://my-portfolio-aeb86.web.app</a> </p>
				<h2>{getAllTextsOfSite("privacyTitleSecond")}</h2>
				<p>
					{getAllTextsOfSite("privacyTextSecondOne")} <br></br>
					{getAllTextsOfSite("privacyTextSecondTwo")} <br></br>
					{getAllTextsOfSite("privacyTextSecondThree")} <a href='https://my-portfolio-aeb86.web.app' alt='Link to website'>https://my-portfolio-aeb86.web.app</a> <br></br>
					{getAllTextsOfSite("privacyTextSecondFour")} <br></br>
					{getAllTextsOfSite("privacyTextSecondFive")}<br></br>
					{getAllTextsOfSite("privacyTextSecondSix")} <br></br>
					{getAllTextsOfSite("privacyTextSecondSeven")}<br></br>
					{getAllTextsOfSite("privacyTextSecondEight")} <a href='https://my-portfolio-aeb86.web.app' alt='Link to website'>https://my-portfolio-aeb86.web.app</a> <br></br>
					{getAllTextsOfSite("privacyTextSecondNine")}<br></br>
					{getAllTextsOfSite("privacyTextSecondTen")} <a href='https://my-portfolio-aeb86.web.app' alt='Link to website'>https://my-portfolio-aeb86.web.app</a> <br></br>
					{getAllTextsOfSite("privacyTextSecondEleven")} <br></br>
					{getAllTextsOfSite("privacyTextSecondTwelve")} <br></br>
					{getAllTextsOfSite("privacyTextSecondThirteen")} <br></br>
					{getAllTextsOfSite("privacyTextSecondFourteen")} <br></br>
				</p>
				<h2>{getAllTextsOfSite("privacyTitleThree")}</h2>
				<p>{getAllTextsOfSite("privacyTextThirdOne")}<br></br>
					{getAllTextsOfSite("privacyTextThirdTwo")}</p>
				<h2>{getAllTextsOfSite("privacyTitleFour")}</h2>
				<p>{getAllTextsOfSite("privacyTextFourthOne")}<br></br>
					{getAllTextsOfSite("privacyTextFourthTwo")}<br></br>
					{getAllTextsOfSite("privacyTextFourthThree")}</p>
				<h2>{getAllTextsOfSite("privacyTitleFive")}</h2>
				<p>{getAllTextsOfSite("privacyTextFifthOne")}<br></br>
					{getAllTextsOfSite("privacyTextFifthTwo")}<br></br>
					{getAllTextsOfSite("privacyTextFifthThree")}<br></br>
					{getAllTextsOfSite("privacyTextFifthFour")}<br></br>
					{getAllTextsOfSite("privacyTextFifthFive")}<br></br>
					{getAllTextsOfSite("privacyTextFifthSix")}<br></br>
					{getAllTextsOfSite("privacyTextFifthSeven")}</p>
				<h2>
				{getAllTextsOfSite("privacyTitleSix")}
				</h2>
				<p>
				{getAllTextsOfSite("privacyTextSixOne")}<br></br>
				{getAllTextsOfSite("privacyTextSixTwo")}<br></br>
				{getAllTextsOfSite("privacyTextSixThree")}<br></br>
				{getAllTextsOfSite("privacyTextSixFour")}<br></br>
				{getAllTextsOfSite("privacyTextSixFive")}
				</p>
				<h2>
				{getAllTextsOfSite("privacyTitleSeven")}
				</h2>
				<p>
				{getAllTextsOfSite("privacyTextSevenOne")}<br></br>
				{getAllTextsOfSite("privacyTextSevenTwo")}<br></br>
				{getAllTextsOfSite("privacyTextSevenThree")}<br></br>
				{getAllTextsOfSite("privacyTextSevenFour")}<br></br>
				{getAllTextsOfSite("privacyTextSevenFive")}<br></br>
				{getAllTextsOfSite("privacyTextSevenSix")}<br></br>
				{getAllTextsOfSite("privacyTextSevenSeventh")}
				</p>
				<h2>
				{getAllTextsOfSite("privacyTitleEight")}
				</h2>
				<p>{getAllTextsOfSite("privacyTextEightTitle")} <br></br> </p>
				<p>{getAllTextsOfSite("privacyTextEightFirst")}<br></br>
				{getAllTextsOfSite("privacyTextEightSecond")}<br></br>
				{getAllTextsOfSite("privacyTextEightThird")}<br></br>
				{getAllTextsOfSite("privacyTextEightFourth")} <br></br>
				{getAllTextsOfSite("privacyTextEightFifth")}<br></br>
				{getAllTextsOfSite("privacyTextEightSixth")}<br></br>
				{getAllTextsOfSite("privacyTextEightSeventh")}<br></br>
				{getAllTextsOfSite("privacyTextEightEighth")}<br></br>
				{getAllTextsOfSite("privacyTextEightNinth")}</p>
				<h2>{getAllTextsOfSite("privacyTitleNine")}</h2>
				<p>{getAllTextsOfSite("privacyTextNineFirst")}<br></br>
				{getAllTextsOfSite("privacyTextNineSecond")}</p>
				<h2>
				{getAllTextsOfSite("privacyTitleTen")}
				</h2>
				<p>
				{getAllTextsOfSite("privacyTextTenFirst")}<br></br>
				{getAllTextsOfSite("privacyTextTenSecond")}
				</p>
				<h2>
				{getAllTextsOfSite("privacyTitleEleven")}
				</h2>
				<p>
				{getAllTextsOfSite("privacyTextElevenFirst")}
				</p>
				<h2>{getAllTextsOfSite("privacyTitleTwelve")}</h2>
				<p>
				{getAllTextsOfSite("privacyTextTwelveFirst")}<br></br>
				{getAllTextsOfSite("privacyTextTwelveSecond")} <br></br>
				{getAllTextsOfSite("privacyTextTwelveThird")} <a href='https://my-portfolio-aeb86.web.app' alt='Link to website'>https://my-portfolio-aeb86.web.app</a>
				</p>
			</div>
			<ArrowScrollUp />
		</div >

	);

};

export default Privacy;