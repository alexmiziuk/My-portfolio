import MyPromo from './Componets/MyPromo/MyPromo';
import './App.scss';
import './Componets/Sidepanel/Sidepanel'
import Sidepanel from './Componets/Sidepanel/Sidepanel';
import Menu from './Componets/Menu/Menu';
import './App.scss';
import About from './Componets/About/About';
import { useState } from 'react';



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
		</div>
	);
}

export default App;
