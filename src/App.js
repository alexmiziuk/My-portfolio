import { useState } from 'react';

import MyPromo from './Componets/MyPromo/MyPromo';
import './Componets/Sidepanel/Sidepanel'
import Sidepanel from './Componets/Sidepanel/Sidepanel';
import Menu from './Componets/Menu/Menu';
import About from './Componets/About/About';
import Contacts from './Componets/Contacts/Contacts';
import Education from './Componets/Education/Education';
import Skills from './Componets/Skills/Skills';
import Portfolio from './Componets/Portfolio/Portfolio';
import Hamburger from './Componets/Hamburger/Hamburger';
import Privacy from './Componets/Privacy/Privacy';

import './App.scss';


function App() {

	const [state, setState] = useState(false);
	const [privacyPolicy, setPrivacyPolicy] = useState(false)  


	return (
		<div className="App">
			<Sidepanel />
			<Hamburger menuActive={state} setMenuActive={setState} />
			<Menu active={state} setActive={setState} />
			<MyPromo />
			<About />
			<Education />
			<Skills />
			<Portfolio />
			<Contacts privacyPolicy={privacyPolicy} setPrivacyPolicy={setPrivacyPolicy}/>
			<Privacy privacy={privacyPolicy} setPrivacy={setPrivacyPolicy} />
			</div>
	);
}

export default App;
