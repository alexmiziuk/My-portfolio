import MyPromo from './Componets/MyPromo/MyPromo';
import './Componets/Sidepanel/Sidepanel'
import Sidepanel from './Componets/Sidepanel/Sidepanel';
import Menu from './Componets/Menu/Menu';
import About from './Componets/About/About';
import Contacts from './Componets/Contacts/Contacts';
import { useState } from 'react';
import Education from './Componets/Education/Education';
import Skills from './Componets/Skills/Skills';
import Portfolio from './Componets/Portfolio/Portfolio';
import Hamburger from './Componets/Hamburger/Hamburger';
import { ArrowScrollUp } from './Componets/ArrowScrollUp/ArrowScrollUp';

import './App.scss';




function App() {

	const [menuActive, setMenuActive] = useState(false)




	return (
		<div className="App">
			<Sidepanel />
			<Hamburger menuActive={menuActive} setMenuActive={setMenuActive} />
			<Menu active={menuActive} setActive={setMenuActive} />
			<MyPromo />
			<About />
			<Education />
			<Skills />
			<Portfolio />
			<Contacts />
			<ArrowScrollUp />
		</div>
	);
}

export default App;
