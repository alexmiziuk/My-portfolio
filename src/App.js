import MyPromo from './Componets/MyPromo/MyPromo';
import './App.scss';
import './Componets/Sidepanel/Sidepanel'
import Sidepanel from './Componets/Sidepanel/Sidepanel';
import Menu from './Componets/Menu/Menu';
import './App.scss';
import About from './Componets/About/About';
import Contacts from './Componets/Contacts/Contacts';
import { useState } from 'react';
import Education from './Componets/Education/Education';
import Skills from './Componets/Skills/Skills';
import Portfolio from './Componets/Portfolio/Portfolio';
import ScrollUp from './Componets/ScrollUp/ScrollUp';




function App() {

	const [menuActive, setMenuActive] = useState(false)

	


	return (
		<div className="App">
			<Sidepanel />
			<div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
				<span className='right'></span>
				<span className='long'></span>
				<span className='left'></span>
			</div>
			<Menu active={menuActive} setActive={setMenuActive} />
			<MyPromo />
			<About />
			<Education />
			<Skills />
			<Portfolio />
			<Contacts />
			<ScrollUp  />
		</div>
	);
}

export default App;
